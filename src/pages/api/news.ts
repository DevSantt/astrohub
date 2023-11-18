const express = require('express')
const app = express()

app.get('/space', async (req, res) => {
    const SpaceNews = await fetch('https://spacenewsapi-production.up.railway.app/')
    return res.send(SpaceNews)
})

