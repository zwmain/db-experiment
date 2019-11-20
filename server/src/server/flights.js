const Message = require('./Message');
const {queryFlights} = require('../api/flight');

function flights(res, data) {
    queryFlights(data).then(value => {
        res.write(JSON.stringify(new Message(0, '查询成功', value)));
    }).catch(e => {
        res.write(JSON.stringify(new Message(1, '查询失败' + e.toString())));
    }).finally(() => {
        res.end();
    })
}

module.exports = flights;