module.exports={
    search:(req, res, next) => {
        const dbInstance = req.app.get('db')
        dbInstance.searc([req.query.title]).then(entry=> res.status(200).send(song[0])).catch(error=>{console.error(error);res.status(500).send(err)})
    }
}