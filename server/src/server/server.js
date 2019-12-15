const login = require('./login');
const logon = require('./logon');
const { flight, getAllFlights, addToFlight, rmFlight, changeFlight } = require('./flights');
const { orderFlight, orderList } = require('./order');

function dealReq(req, res) {
  let data = '';
  req.on('data', v => {
    data += v.toString();
  });
  req.on('end', () => {
    data = JSON.parse(data.toString());
    switch (req.url) {
      case '/api/login': {
        login(res, data);
        break;
      }
      case '/api/logon': {
        logon(res, data);
        break;
      }
      case '/api/flights': {
        flight(res, data);
        break;
      }
      case '/api/orderFlight': {
        orderFlight(res, data);
        break;
      }
      case '/api/orderList': {
        orderList(res, data);
        break;
      }
      case '/api/getAllFlights': {
        getAllFlights(res);
        break;
      }
      case '/api/addFlight': {
        addToFlight(res, data);
        break;
      }
      case '/api/rmFlight': {
        rmFlight(res, data);
        break;
      }
      case '/api/changeFlight': {
        changeFlight(res, data);
        break;
      }
      default: {
        res.write(JSON.stringify({ status: 1, message: '接口不存在' }));
        res.end();
        break;
      }
    }
  });
}

function setCors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'application/json;charset=utf-8');
}

module.exports = { dealReq, setCors };
