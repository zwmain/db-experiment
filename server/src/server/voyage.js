const Message = require('./Message');
const { apiAddVoyage, apiGetAllVoyages, apiChangeVoyage, apiRmVoyage } = require('../api/voyage');

function addVoyage(res, data) {
  apiAddVoyage(data)
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

function getAllVoyages(res) {
  apiGetAllVoyages()
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

function rmVoyage(res, data) {
  apiRmVoyage(data)
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

function changeVoyage(res, data) {
  apiChangeVoyage(data)
    .then(() => {
      res.write(JSON.stringify(new Message(0, '修改成功')));
    })
    .catch(e => {
      res.write(JSON.stringify(new Message(1, '修改失败' + e.toString())));
    })
    .finally(() => {
      res.end();
    });
}

module.exports = {
  addVoyage,
  getAllVoyages,
  rmVoyage,
  changeVoyage
};
