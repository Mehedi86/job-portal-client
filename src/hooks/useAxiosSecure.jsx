import axios from 'axios';
import { useEffect } from 'react';
import useHookContext from './UserContextHook';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})

const useAxiosSecure = () => {
    const {userLogOut} = useHookContext();
    const navigate = useNavigate();

    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response;
        }, error => {
            console.log('error caught in interceptor', error)
            if(error.status === 403 || error.status === 401){
                userLogOut().then(()=> {
                    console.log('logged out user')
                    navigate('/login')
                }).catch(err=>{
                    console.log('err', err)
                })
            }
            return Promise.reject(error)
        })
    }, [userLogOut])

    return axiosInstance;
};

export default useAxiosSecure;