const connection = require("../config/config")

const getHomepage = async (req, res) => {
    const [results, fields] = await connection.query(`select * from Users`);
    console.log(results)
    return res.render("home.ejs", { listUsers: results })
}

const getNewUser = (req, res) => {
    return res.render('new_user.ejs')
}

const postCreateUser = async (req, res) => {

    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    // const [results, fields] = await connection.query(`select * from Users`);

    const [results, fields] = await connection.query(`insert into Users (email, name, city) values (?, ?, ?)`, [email, name, city]);
    res.send('succeed');


    // return res.render('home.ejs')
}

module.exports = {
    getHomepage, getNewUser, postCreateUser
}