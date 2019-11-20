const {execSql} = require('./sql');

function queryFlights(data) {
    let sql = `
    select * from availableflight
    where flyDate='${data.flyDate}' and oriCity='${data.oriCity}' and tarCity='${data.tarCity}'
    `;
    return execSql(sql);
}

module.exports = {queryFlights};