const {execSql} = require('./sql');

function queryOrderExact(data) {
    const sql = `
    select * from \`order\`
    where userId='${data.userId}'
    and flyDate='${data.flyDate}'
    and flightId='${data.flightId}'
    `;
    return execSql(sql);
}

function queryOrderByUser(userId = '') {
    const sql = `
    select *
    from \`order\`
    where userId='${userId}';
    `;
    return execSql(sql);
}

function addOrder(data) {
    const {userId, flyDate, flightId, flyTime, arrTime, oriCity, tarCity, price} = data;
    const sql = `
    insert into \`order\`
    values('${userId}','${flyDate}','${flightId}','${flyTime}','${arrTime}','${oriCity}','${tarCity}','${price}');
    `;
    return execSql(sql);
}

module.exports = {
    queryOrderByUser,
    queryOrderExact,
    addOrder
};