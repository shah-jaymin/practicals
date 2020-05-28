const db = require('../db/server');

const createTable= `
    CREATE TABLE IF NOT EXISTS user (
        UserID int(8) NOT NULL AUTO_INCREMENT,
        Name varchar(40) DEFAULT NULL,
        UserCode varchar(40) DEFAULT NULL,
        Age int(8) DEFAULT NULL,
        PRIMARY KEY (UserID)
    );
`

db.query(createTable, (err, result) => {
    if(err) {
        console.log('Table not created')
    }else {
        console.log('Table created');
    }
})