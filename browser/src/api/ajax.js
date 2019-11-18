import axios from 'axios';

function ajax(url, data, method = 'post') {
    return axios({
        url: url,
        method: method,
        data: data
    });
}

export default ajax;