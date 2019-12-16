const { execSql } = require('./sql');

function addStaff(data) {
  const { staffName, staffPwd } = data;
  const sql = `
  insert into staff
  values('${staffName}','${staffPwd}')
  `;
  return execSql(sql);
}

function getAllStaffs() {
  const sql = `
  select * from staff
  `;
  return execSql(sql);
}

function rmStaff(data) {
  const { staffName } = data;
  const sql = `
  delete from staff
  where staffName='${staffName}'
  `;
  return execSql(sql);
}

module.exports = {
  apiAddStaff: addStaff,
  apiGetAllStaffs: getAllStaffs,
  apiRmStaff: rmStaff
};
