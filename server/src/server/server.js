const Url=require('url');

function dealReq(req, res) {
    let myUrl=Url.parse(req.url,true);
    res.write(req.method);
    res.write(JSON.stringify(myUrl));
    res.end();
}

function setCors(res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With');
    res.setHeader('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    res.setHeader('X-Powered-By', ' 3.2.1');
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
}

module.exports = {dealReq, setCors};