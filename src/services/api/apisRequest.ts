import axios from "axios";

export const solarSystemApi = axios.create({
    baseURL: 'https://api.le-systeme-solaire.net/rest'
})

const url = 'https://api.thenewsapi.com/v1/news/all?api_token=DagkoROTLZOVfRaL8eBd1sEbM8yEuGYXQtBxM628&search=nasa&domains=nytimes.com&language=en'

//news?apikey=pub_32631969d2dfe064f273e2d9dd86931923b85&q=nasa

export const NewsApi = axios.create({
    baseURL: url
})

