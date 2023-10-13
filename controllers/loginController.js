exports.postLoginUser = (req, res) => {
    const userName = req.body.userName;
    const password = req.body.password;

    console.log(`${userName} ${password}`);

}


