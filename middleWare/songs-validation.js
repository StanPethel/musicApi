exports.validateSong = (req, res, next) => {
    const data = req.body;
    if(
        (data.hasOwnProperty('id') && typeof(data.id) === 'number') &&
        (data.hasOwnProperty('title') && typeof(data.title) === 'string') &&
        (data.hasOwnProperty('album') && typeof(data.album) === 'string') &&
        (data.hasOwnProperty('genre') && typeof(data.genre) === 'string') &&
        (data.hasOwnProperty('releaseDate') && typeof(data.releaseDate) === 'number')
    ){
        return next();
    }else{
        return res.status(400).send({error: 'Missing required properties.'});
    }
}