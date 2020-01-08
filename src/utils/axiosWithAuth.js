import axios from 'axios';

const axiosWithAuth = (role) => {
    
    const token = localStorage.getItem('token');

    return axios.create ({
        baseURL: 'https://devdesk-queue-2020.herokuapp.com/api',
        headers: {
            role: role,
            Authorization: token
            
        }
    })
}

export default axiosWithAuth;