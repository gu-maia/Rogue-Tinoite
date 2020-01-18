/* eslint-disable camelcase */
const Like = require('../models/Likes')
const User = require('../models/Users')

module.exports = {

  async likeUser (req, res) {
    const { matcher_id, matched_id, sta_like } = req.body

    const matcher = await User.findByPk(matcher_id)
    const matched = await User.findByPk(matched_id)

    const isMatched = await Like.findAll({
      where: {
        matcher_id: matched_id,
        matched_id: matcher_id
      }
    })

    const like = await Like.create({ matcher_id, matched_id, sta_like })

    console.log(`${matcher.name} (${matcher.id}) Liked ${matched.name} (${matched.id}).`)

    if (isMatched.length) {
      console.log('It\'s a match!')
    }

    return res.json(like)
  },

  async index (req, res) {
    const like = await Like.findAll()
    return res.json(like)
  },

  async getmatchesof (req, res) {
    const id = req.params.id
    // Gets all users that liked back
    const usersThatLikedBack = await Like.findAll({
      where: {
        matched_id: id,
        sta_like: ['R', 'S']
      },
      attributes: ['matcher_id']
    })

    // Need to transform into vector to pass as argument in next query
    let usersThatLikedBackObj = JSON.stringify(usersThatLikedBack)
    usersThatLikedBackObj = JSON.parse(usersThatLikedBackObj)
    usersThatLikedBackObj = usersThatLikedBackObj.map(i => i.matcher_id)

    const matches = await Like.findAll({
      where: {
        matcher_id: id,
        matched_id: usersThatLikedBackObj
      }
    })

    return res.json(matches)
  }

}
