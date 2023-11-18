import axios from "axios";

export const solarSystemApi = axios.create({
    baseURL: 'https://api.le-systeme-solaire.net/rest'
})



export const NewsApi = axios.create({
    baseURL: 'https://astrohub.vercel.app/api/news'
})

