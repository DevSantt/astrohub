async function SpaceNews () {
    const response = await fetch('https://spacenewsapi-production.up.railway.app/')
    const news = await response.json()
    return news
}
    
