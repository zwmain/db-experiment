
function dealReq(req, res) {
    let data = '';
    req.on('data', v => {
        data += v;
    });
    req.on('end', () => {
        res.write(JSON.stringify(data));
        res.end();
    });

}

function setCors(res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.setHeader('content-type', 'application/json;charset=utf-8');
}

module.exports = {dealReq, setCors};