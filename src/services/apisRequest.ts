import axios from "axios";

export const solarSystemApi = axios.create({
    baseURL: 'https://api.le-systeme-solaire.net/rest'
})

const url = 'https://spacenewsapi-production.up.railway.app/'


export const NewsApi = axios.create({
    baseURL: url
})

