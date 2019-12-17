const Message = require('./Message');
const { queryUser } = require('../api/user');

function login(res, data) {
  queryUser(data)
    .then(results => {
      if (results.length > 0) {
        res.write(JSON.stringify(new Message(0, '登录成功', results[0])));
      } else {
        res.write(JSON.stringify(new Message(1, '用户名或密码错误')));
      }
    })
    .catch(e => {
      console.log(e);
    })
    .finally(() => {
      res.end();
    });
}

module.exports = login;
