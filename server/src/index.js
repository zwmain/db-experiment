const {initSqlConnect} = require('./api/sql');
const http = require('http');
const {dealReq, setCors} = require('./server/dealReq');

async function main() {
    let isSqlConnected = await initSqlConnect();
    if (isSqlConnected) {
        console.log('MySql连接成功');
        const server = http.createServer((req, res) => {
            console.log('服务器已启动');
            setCors(res);
            dealReq(req, res);
        });
        server.listen(8848);
    } else {
        console.log('MySql连接失败');
    }
}

module.exports = main;