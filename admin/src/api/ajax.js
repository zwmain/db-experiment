import axios from 'axios';

function ajax(url, data, method = 'post') {
    return axios({
        url: url,
        method: method,
        data: JSON.stringify(data)
    });
}

export default ajax;