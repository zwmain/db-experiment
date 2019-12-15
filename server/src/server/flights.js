const Message = require('./Message');
const {
  queryFlights,
  queryAllFlights,
  addFlight,
  apiRmFlight,
  apiChangeFlight
} = require('../api/flight');

function flights(res, data) {
  queryFlights(data)
    .then(value => {
      res.write(JSON.stringify(new Message(0, '查询成功', value)));
    })
    .catch(e => {
      res.write(JSON.stringify(new Message(1, '查询失败' + e.toString())));
    })
    .finally(() => {
      res.end();
    });
}

function getAllFlights(res) {
  queryAllFlights()
    .then(value => {
      res.write(JSON.stringify(new Message(0, '查询成功', value)));
    })
    .catch(e => {
      res.write(JSON.stringify(new Message(1, '查询失败' + e.toString())));
    })
    .finally(() => {
      res.end();
    });
}

function addToFlight(res, data) {
  addFlight(data)
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

function rmFlight(res, data) {
  apiRmFlight(data)
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

function changeFlight(res, data) {
  apiChangeFlight(data)
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
  flights,
  getAllFlights,
  addToFlight,
  rmFlight,
  changeFlight
};
