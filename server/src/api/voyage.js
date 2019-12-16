const { execSql } = require('./sql');

function addVoyage(data) {
  const { flightId, flyDate, price, remain } = data;
  const sql = `
  insert into voyage
  values('${flyDate}','${flightId}','${price}','${remain}')
  `;
  return execSql(sql);
}

function getAllVoyages() {
  const sql = `
  select * from voyage
  `;
  return execSql(sql);
}

function rmVoyage(data) {
  const { flightId, flyDate } = data;
  const sql = `
  delete from voyage
  where flightId='${flightId}' and flyDate='${flyDate}'
  `;
  return execSql(sql);
}

function changeVoyage(data) {
  const { voyageItem, oldItem } = data;
  const { flightId, flyDate, price, remain } = voyageItem;
  const sql = `
  update voyage
  set
  flightId='${flightId}',
  flyDate='${flyDate}',
  price=${price},
  remain=${remain}
  where flightId='${oldItem.flightId}' and flyDate='${oldItem.flyDate}'
  `;
  return execSql(sql);
}

module.exports = {
  apiAddVoyage: addVoyage,
  apiGetAllVoyages: getAllVoyages,
  apiRmVoyage: rmVoyage,
  apiChangeVoyage: changeVoyage
};
