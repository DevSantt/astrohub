async function spaceNews (req, res) {
   const newsResponse = await fetch("https://newsapi-tan.vercel.app/")
   const newsResponseJson = await newsResponse.json()
   const news = await newsResponseJson
   
      console.log(news)
      res.send({
       results: news
      })
   }
       
   
   export default spaceNews
