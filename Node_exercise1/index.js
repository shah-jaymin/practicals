const mysql = require('mysql');
const express = require('express');
let app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

let mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'UserDB',
    multipleStatements: true
});

mysqlConnection.connect((err) => {
    if (!err)
        console.log('DB connection succeded.');
    else
        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});

app.listen(3000, () => console.log('Express server is running at port no: 3000'));


//Get all users
app.get('/users', (req, res) => {
    mysqlConnection.query('SELECT * FROM user', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

//Get specific user
app.get('/users/:id', (req, res) => {
    mysqlConnection.query('SELECT * FROM user WHERE UserID = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

//Delete user
app.delete('/users/:id', (req, res) => {
    mysqlConnection.query('DELETE FROM user WHERE UserID = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send('Deleted successfully!');
        else
            console.log(err);
    })
});

//Insert user
app.post('/users', (req, res) => {
    let user = req.body;
    let sql = "INSERT INTO user (Name, UserCode, Age) VALUES (?, ?, ?)";
    mysqlConnection.query(sql, [user.Name, user.UserCode, user.Age], (err, rows, fields) => {
        if (!err)
            res.send('Inserted successfully!');
        else
            console.log(err);
    })
});

//Update user
app.put('/users', (req, res) => {
    let user = req.body;
    let sql = "UPDATE user SET Name = ?, UserCode = ?, Age = ? WHERE UserID = ?";
    mysqlConnection.query(sql, [user.Name, user.UserCode, user.Age, user.UserID], (err, rows, fields) => {
        if (!err)
            res.send('Updated successfully!');
        else
            console.log(err);
    })
});