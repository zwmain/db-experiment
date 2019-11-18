const {MySqlConnect} = require('../api/sql');
const Message = require('./Message');

function login(res, data) {
    data = JSON.parse(data.toString());
    let sql = `
    select * from user
    where userId='${data.username}' and password='${data.password}'
    `;
    MySqlConnect.query(sql, (err, results) => {
        if (err) {
            console.log(err);
        } else {
            if (results.length > 0) {
                res.write(JSON.stringify(new Message(0, '登录成功', results[0])));
            } else {
                res.write(JSON.stringify(new Message(1, '用户名或密码错误')));
            }

        }
        res.end();
    })
}

module.exports = login;