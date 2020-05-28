const mysql = require('mysql');

module.exports = mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    multipleStatements: true
});

mysqlConnection.connect();

mysqlConnection.query('CREATE DATABASE IF NOT EXISTS UserDB', (err) => {
    if(err) {
            console.log('Database not created')
    } else {
        console.log('Database created');
        mysqlConnection.query('USE UserDB', (err) => {
            if(err) {
                    console.log('Database not created')
            } else {
                require('../entities/userModel');
            }   
        })
    }
})