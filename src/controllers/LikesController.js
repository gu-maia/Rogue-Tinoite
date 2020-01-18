const Like = require('../models/Likes')


module.exports = {
 async store(req, res) {
 const {matcher_id, matched_id, sta_like} = req.body

 const like = await Like.create({ matcher_id, matched_id, sta_like });

 return res.json(like);
 },

 async index(req, res) {

 const like = await Like.findAll();

 return res.json(like);
},

async getmatchesof(req, res) {

 const id = req.params.id;

 

 return res.json(matches);

}



};
