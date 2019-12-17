const Message = require('./Message');
const { apiAddStaff, apiGetAllStaffs, apiRmStaff, login } = require('../api/staff');

function addStaff(res, data) {
  apiAddStaff(data)
    .then(() => {
      res.write(JSON.stringify(new Message(0, '添加成功')));
    })
    .catch(e => {
      res.write(JSON.stringify(new Message(1, '添加失败' + e.toString())));
    })
    .finally(() => {
      res.end();
    });
}

function getAllStaffs(res) {
  apiGetAllStaffs()
    .then(v => {
      res.write(JSON.stringify(new Message(0, '查询成功', v)));
    })
    .catch(e => {
      res.write(JSON.stringify(new Message(1, '添加失败' + e.toString())));
    })
    .finally(() => {
      res.end();
    });
}

function rmStaff(res, data) {
  apiRmStaff(data)
    .then(() => {
      res.write(JSON.stringify(new Message(0, '删除成功')));
    })
    .catch(e => {
      res.write(JSON.stringify(new Message(1, '删除失败' + e.toString())));
    })
    .finally(() => {
      res.end();
    });
}

function staffLogin(res, data) {
  login(data)
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

module.exports = {
  addStaff,
  getAllStaffs,
  rmStaff,
  staffLogin
};
