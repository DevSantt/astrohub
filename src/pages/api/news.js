const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', async (req, res) => {
    const SpaceNews = await fetch('https://spacenewsapi-production.up.railway.app/')
    return res.send(SpaceNews)
})

app.listen(port, () => {
    console.log('listening')
})

