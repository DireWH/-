import axios from 'axios';
import nprogress from 'nprogress';
import "nprogress/nprogress.css"

const requests = axios.create({
    baseURL:'/api/',
    timeout:2000
});

requests.interceptors.request.use((config)=>{
    nprogress.start();
    return config
})
requests.interceptors.response.use((res)=>{nprogress.done();return res.data},(error)=>{})

export default requests