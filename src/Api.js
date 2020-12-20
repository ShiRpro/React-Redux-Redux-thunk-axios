import axios from 'axios';
const API_KEY = 'd173bfaddf7e1cc7cf72fefadeff0d95';
export const Api = {
    gettingWeatherDetail(City) {
        return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${API_KEY}&units=metric`)
    }
}

