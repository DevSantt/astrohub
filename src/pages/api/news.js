async function SpaceNews () {
    const response = await fetch('https://spacenewsapi-production.up.railway.app/')
    return response.json()
}
    
