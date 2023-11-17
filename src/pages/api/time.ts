function time (req, res) {
    const dynamicDate = new Date();
    res.json({
        date: dynamicDate.toUTCString()
    })
}

export default time