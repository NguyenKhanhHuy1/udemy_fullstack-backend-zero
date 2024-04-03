const connection = require('../config/database');


const getHomepage = (req, res) => {
    return res.render('home.ejs')
    // let users = [];
    // connection.query(
    //     'SELECT * FROM Users;',
    //     function (err, results, fields) {
    //         users = results;
    //         console.log('>>>result=', results);

    //         console.log('>>>check users:', users)
    //         res.send(JSON.stringify(users))
    //     }

    // );

}

const getABC = (req, res) => {
    res.send('check ABC')
}

const getHoidanIT = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage, getABC, getHoidanIT, getHoidanIT
}