// const data = require("../config/db");

// exports.postLoginUser = (userName, password) =>{
//     const authenticatedUser = data.user.find(
//         (user) => user.username === userName && user.password === password
//       );
    
//       if(authenticatedUser){
//         try {
//             res.cookie("user", authenticatedUser);
//             res.json({ message: "login successful", user: authenticatedUser });
//           } catch (err) {
//             res.json("Error setting cookie: " + err.message);
//           }
//       }
//       else{
//         res.json("Login Failed");
//       }
// }