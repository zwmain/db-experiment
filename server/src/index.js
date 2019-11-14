const {initSqlConnect} = require('./api/sql');

async function main() {
    let isSqlConnected = await initSqlConnect();
    if (isSqlConnected) {
        console.log('MySql连接成功');
    } else {
        console.log('MySql连接失败');
    }
}

module.exports = main;