const {execSql} = require('./sql');

function queryFlights(data) {
    const sql = `
    select * from availableflight
    where flyDate='${data.flyDate}' and oriCity='${data.oriCity}' and tarCity='${data.tarCity}'
    `;
    return execSql(sql);
}

function queryVoyage(data) {
    const sql = `
    select remain from voyage
    where flyDate='${data.flyDate}' and flightId='${data.flightId}'
    `;
    return execSql(sql);
}

function updateVoyage(data) {
    const sql = `
    update voyage
    set remain=remain-1
    where flyDate='${data.flyDate}' and flightId='${data.flightId}'
    `;
    return execSql(sql);
}

module.exports = {
    queryFlights,
    queryVoyage,
    updateVoyage
};