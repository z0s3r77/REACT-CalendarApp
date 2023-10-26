import axios from 'axios';





const calendarApi = axios.create({
    baseURL: 'https://calendaraapp-8c5df3a67725.herokuapp.com/api'
});

// Todo: configurar interceptores
calendarApi.interceptors.request.use( config => {

    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }

    return config;
})


export default calendarApi;


