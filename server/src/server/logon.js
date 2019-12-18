const Message = require('./Message');
const {queryUserById, insertUser} = require('../api/user');

async function logon(res, data) {
    //查询用户是否已经注册
    let users = await queryUserById(data.userId);
    if (users.length > 0) {
        //若已经注册，注册失败
        res.write(JSON.stringify(new Message(1, "用户已存在")));
    } else {
        //添加到用户表
        let results = await insertUser(data);
        //判断添加是否成功
        if (results !== null) {
            res.write(JSON.stringify(new Message(0, "注册成功", data)));
        } else {
            res.write(JSON.stringify(new Message(1, "注册失败，数据库异常")));
        }
    }
    res.end();
}

module.exports = logon;