import express from "express";
//import { postLoginUser } from "../controllers/loginController";

const router = express.Router();

router.post("/login", (req, res) => {
    const userName = req.body.userName;
    const password = req.body.password;

    console.log(`${userName} ${password}`);



});
module.exports = router;

// module.exports = {
//     postLoginUser
// }