const db = require('../db/server');

exports.addUser = (userDetails) => {
    const addUserQuery = `
    INSERT INTO user (Name, UserCode, Age) VALUES ('${userDetails.name}', '${userDetails.userCode}', '${userDetails.age}');
    `;
    return new Promise((resolve, reject) => {
        db.query(addUserQuery, (err) => {
            if(err) {
                return reject(false)
            } else {
                return resolve(true)
            }
        })
    })
}

exports.deleteUser = (userDetails) => {
    const deleteUserQuery = `
    DELETE FROM user WHERE UserID = ('${userDetails.id}');
    `;
    return new Promise((resolve, reject) => {
        db.query(deleteUserQuery, (err) => {
            if(err) {
                return reject(false)
            } else {
                return resolve(true)
            }
        })
    })
}

exports.getUser = (userDetails) => {
    const getUser = `
    SELECT * FROM user WHERE UserID = ('${userDetails.id}');
    `;
    return new Promise((resolve, reject) => {
        db.query(getUser, (err, rows) => {
            if(err) {
                return reject(false)
            } else {
                return resolve(rows)
            }
        })
    })
}

exports.getUsers = () => {
    const getUsers = `
    SELECT * FROM user;
    `;
    return new Promise((resolve, reject) => {
        db.query(getUsers, (err, rows) => {
            if(err) {
                return reject(false)
            } else {
                return resolve(rows)
            }
        })
    })
}

exports.updateUser = (userDetails) => {
    const updateUser = `
    UPDATE user SET Name = ('${userDetails.name}'), UserCode = ('${userDetails.userCode}'), Age = ('${userDetails.age}') WHERE UserID = ('${userDetails.id}');
    `;
    return new Promise((resolve, reject) => {
        db.query(updateUser, (err) => {
            if(err) {
                return reject(false)
            } else {
                return resolve(true)
            }
        })
    })
}