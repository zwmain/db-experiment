const login = require('./login');
const logon = require('./logon');
const { flight, getAllFlights, addToFlight, rmFlight, changeFlight } = require('./flights');
const { orderFlight, orderList } = require('./order');
const { addVoyage, getAllVoyages, rmVoyage, changeVoyage } = require('./voyage');
const { addStaff, getAllStaffs, rmStaff } = require('./staff');

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
      case '/api/addVoyage': {
        addVoyage(res, data);
        break;
      }
      case '/api/getAllVoyages': {
        getAllVoyages(res);
        break;
      }
      case '/api/rmVoyage': {
        rmVoyage(res, data);
        break;
      }
      case '/api/changeVoyage': {
        changeVoyage(res, data);
        break;
      }
      case '/api/addStaff': {
        addStaff(res, data);
        break;
      }
      case '/api/getAllStaffs': {
        getAllStaffs(res);
        break;
      }
      case '/api/rmStaff': {
        rmStaff(res, data);
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
