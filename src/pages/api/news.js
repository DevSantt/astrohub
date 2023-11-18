async function SpaceNews (req, res) {
   const newsResponse = await fetch("https://spacenewsapi-production.up.railway.app/")
   const newsResponseJson = await newsResponse.json()

   res.json({
    results: newsResponseJson
   })
}
    
