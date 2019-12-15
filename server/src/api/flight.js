const { execSql } = require('./sql');

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

function queryAllFlights() {
  const sql = `
    select * from flight
    `;
  return execSql(sql);
}

function addFlight(data) {
  const {
    flightId,
    flyTime,
    arrTime,
    oriCity,
    tarCity,
    price,
    capacity,
    planeType,
    flightCompany
  } = data;
  const sql = `
  insert into flight
  values('${flightId}',
  '${flyTime}',
  '${arrTime}',
  '${oriCity}',
  '${tarCity}',
  '${price}',
  '${capacity}',
  '${planeType}',
  '${flightCompany}'
  )
  `;
  return execSql(sql);
}

function rmFlight(data) {
  const { flightId, flyTime } = data;
  const sql = `
  delete from flight
  where flightId='${flightId}' and flyTime='${flyTime}'
  `;
  return execSql(sql);
}

function changeFlight(data) {
  const { flightItem, oldItem } = data;
  const {
    flightId,
    flyTime,
    arrTime,
    oriCity,
    tarCity,
    price,
    capacity,
    planeType,
    flightCompany
  } = flightItem;
  const sql = `
  update flight
  set
  flightId='${flightId}',
  flyTime='${flyTime}',
  arrTime='${arrTime}',
  oriCity='${oriCity}',
  tarCity='${tarCity}',
  price=${price},
  capacity=${capacity},
  planeType='${planeType}',
  flightCompany='${flightCompany}'
  where flightId='${oldItem.flightId}' and flyTime='${oldItem.flyTime}'
  `;
  return execSql(sql);
}

module.exports = {
  queryFlights,
  queryVoyage,
  updateVoyage,
  queryAllFlights,
  addFlight,
  apiRmFlight: rmFlight,
  apiChangeFlight: changeFlight
};
