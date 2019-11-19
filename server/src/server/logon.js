const Message = require('./Message');
const {queryUserById, insertUser} = require('../api/user');

async function logon(res, data) {
    let users = await queryUserById(data.userId);
    if (users.length > 0) {
        res.write(JSON.stringify(new Message(1, "用户已存在")));
    } else {
        let results = await insertUser(data);
        if (results !== null) {
            res.write(JSON.stringify(new Message(0, "注册成功", data)));
        } else {
            res.write(JSON.stringify(new Message(1, "注册失败，数据库异常")));
        }
    }
    res.end();
}

module.exports = logon;