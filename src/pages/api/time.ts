function time (req: any, res: any){
    const dynamicDate = new Date();
    res.json({
        date: dynamicDate.toUTCString()
    })
}

export default time