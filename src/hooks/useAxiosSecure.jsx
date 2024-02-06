import axios from 'axios';

//! Axios configuration hook

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {
    return axiosSecure ;
};

export default useAxiosSecure;