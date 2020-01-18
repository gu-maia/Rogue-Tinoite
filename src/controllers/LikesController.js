const Like = require('../models/Likes')
const User = require('../models/Users')

function isLikedBy(likedUser, Liker){

}

module.exports = {


 async likeUser(req, res) {

 const {matcher_id, matched_id, sta_like} = req.body

 const matcher = await User.findByPk(matcher_id);
 const matched = await User.findByPk(matched_id);

 const like = await Like.create({ matcher_id, matched_id, sta_like });

 console.log(`${matcher.name} (${matcher.id}) Liked ${matched.name} (${matched.id}).`)
 return res.json(like);

 },


 async index(req, res) {

 const like = await Like.findAll();
 return res.json(like);

},

//DOESNT WORK AT ALL
async getmatchesof(req, res) {

 const id = req.params.id;

 const usersThatLikedBack = await Like.findAll({ // Gets all users that liked back
    where: {
        matched_id: id,
        sta_like: ['R', 'S']
    },
    attributes: ['matcher_id'],
});



 const matches = await Like.findAll({
    where: {
      matcher_id: id,
      matched_id: usersThatLikedBack,
      },
    })
 
 //return res.json(usersLikedBack);

}



};


