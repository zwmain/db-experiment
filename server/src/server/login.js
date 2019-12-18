const Message = require('./Message');
const { queryUser } = require('../api/user');

function login(res, data) {
  //根据前端传送过来的信息查询数据库
  queryUser(data)
    .then(results => {
      //如果查询结果不为空则登录成功
      if (results.length > 0) {
        res.write(JSON.stringify(new Message(0, '登录成功', results[0])));
      } else {
        res.write(JSON.stringify(new Message(1, '用户名或密码错误')));
      }
    })
    .catch(e => {
      //处理异常
      console.log(e);
    })
    .finally(() => {
      //返回到前端
      res.end();
    });
}

module.exports = login;
