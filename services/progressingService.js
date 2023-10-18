const { progressingBook, user, book, bookmark } = require("../config/db");

function fetchProgressingBookByUserId(id) {
  const progressDataList = [];
  const progressList = progressingBook.filter(
    (book) => book.userId === Number(id)
  );
  progressList.forEach((progress) => {
    const progressData = {
      id: progress.id,
      book: book.find((book) => book.id === progress.bookId),
      resumePage: progress.resumePage,
      percent: progress.progressingPercent,
    };
    progressDataList.push(progressData);
  });
  return progressDataList ? progressDataList : [];
}

module.exports = {
  fetchProgressingBookByUserId,
};
