const {execSql} = require('./sql');

function queryUser(data) {
    let sql = `
    select * from user
    where userId='${data.username}' and password='${data.password}'
    `;
    return execSql(sql);
}

function queryUserById(userId = '') {
    let sql = `
    select * from user
    where userId='${userId}'
    `;
    return execSql(sql);
}

function insertUser(user) {
    const sql = `
    insert into \`user\`
    values('${user.userId}','${user.userName}','${user.userGender}','${user.password}')
    `;
    return execSql(sql);
}

module.exports = {
    queryUser,
    queryUserById,
    insertUser
};