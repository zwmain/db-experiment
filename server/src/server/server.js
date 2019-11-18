const login=require('./login');

function dealReq(req, res) {
    let data = '';
    req.on('data', v => {
        data += v;
    });
    req.on('end', () => {
        switch (req.url) {
            case '/api/login':{
                login(res,data);
                break;
            }
            default:{
                res.write(JSON.stringify({status:0,message:'接口不存在'}));
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

module.exports = {dealReq, setCors};