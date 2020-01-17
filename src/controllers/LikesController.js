const Like = require('../models/Likes')

module.exports = {
 async store(req, res) {
 const {matcher_id, matched_id, sta_like} = req.body

 const like = await Like.create({ matcher_id, matched_id, sta_like });

 return res.json(like);
 },
};
