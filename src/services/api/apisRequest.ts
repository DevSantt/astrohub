import axios from "axios";

export const solarSystemApi = axios.create({
    baseURL: 'https://api.le-systeme-solaire.net/rest'
})

const url = 
    'https://newsapi.org/v2/everything?' +
    'sortBy=publishedAt&' +
    'pageSize=25&' +
    'domains=nasa.gov&' +
    'apiKey=14e2feb6af1c4faf976b67072198e16e';

export const newsApi = axios.create({
    baseURL: url
})

