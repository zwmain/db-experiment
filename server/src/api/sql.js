const mysql = require('mysql');

const config = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'db_experiment',
    timezone: '8:00'
};

const MySqlConnect = mysql.createConnection(config);

function initSqlConnect() {
    return new Promise(resolve => {
        MySqlConnect.connect(err => {
            if (err) {
                resolve(false);
            } else {
                resolve(true);
            }
        })
    });
}

module.exports = {MySqlConnect, initSqlConnect};