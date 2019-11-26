const Message = require('./Message');
const {queryOrderExact, addOrder, queryOrderByUser} = require('../api/order');
const {queryVoyage, updateVoyage} = require('../api/flight');

function orderList(res, data) {
    queryOrderByUser(data.userId).then(value => {
        res.write(JSON.stringify(new Message(0, '查询成功', value)));
    }).catch(e => {
        res.write(JSON.stringify(new Message(1, 'OrderList' + e.toString())));
    }).finally(() => {
        res.end();
    });
}

async function orderFlight(res, data) {
    //查询是否已经订票
    const value = await queryOrderExact(data);
    //如果已经订票
    if (value.length > 0) {
        res.write(JSON.stringify(new Message(1, '已订票')));
    } else {
        //判断是否有余票
        let remain = await queryVoyage(data);
        remain = remain[0].remain;
        if (remain > 0) {
            //修改航次信息
            await updateVoyage(data);
            //写入订单
            await addOrder(data);
            res.write(JSON.stringify(new Message(0, '订票成功')));
        } else {
            res.write(JSON.stringify(new Message(2, '无余票')));
        }
    }
    res.end();
}

module.exports = {
    orderFlight,
    orderList
};