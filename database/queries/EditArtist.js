const Artist = require('../models/artist');

module.exports = (_id, artistProps) => {
    return Artist.updateOne({ _id: _id, artistProps })
}