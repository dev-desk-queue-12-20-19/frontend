import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create ({
        baseURL: 'https://devdesk-queue.herokuapp.com/api',
        headers: {
            Role: "helper",
            Authorization: token
            
        }
    })
}

export default axiosWithAuth;