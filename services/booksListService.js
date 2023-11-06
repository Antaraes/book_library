const { booksList, book, author, categories } = require("../config/db");
const supabase = require("../config/supabase.js");
// const booksWithDetails = booksList.map((result) => {
//   const bookDetails = book.find((book) => book.id === result.bookId);
//   const authorDetails = author.find((author) => author.id === result.authId);
//   const categoryDetails = categories.find((cate) => cate.id === result.cateId);

//   return {
//     book: bookDetails,
//     author: authorDetails,
//     categories: categoryDetails,
//   };
// });

const booksWithDetails = async () => {
  let { data: BookList, error } = await supabase.from("BookList").select(`
  bookId,
  Book (
    title,
    image,
    published,
    totalPage
  ),
  Author(
    name,
    bio
  ),
  Categories(
    name
  )
`);

  return BookList;
};

module.exports = {
  booksWithDetails,
};
