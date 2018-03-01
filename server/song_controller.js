module.exports={
    search:(req, res, next) => {
        const dbInstance = req.app.get('db')
        dbInstance.get_entry([req.query.title]).then(entry=> res.status(200).send(song[0])).catch(error=>{console.error(error);res.status(500).send(err)})
    }
}