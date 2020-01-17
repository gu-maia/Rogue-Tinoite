const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'tnt_core',
  password: 'password',
  port: '5432'
})

const likeUser = (req, res) => {

const {matcherId
      ,matchedId
      ,likeType} = req.body

if(likeType === 'R') //Regular
pool.query('INSERT INTO tnt_users_x_matches (user_id_matcher, user_id_matched, sta_like, sta_super_like)  VALUES ($1, $2, \'Y\', \'N\')', [matcherId, matchedId], (error, results) => {
 if(error)
 throw error
 else
 res.status(200).send('Liked successfully!')
})

else //Super Like
pool.query('INSERT INTO tnt_users_x_matches (user_id_matcher, user_id_matched, sta_like, sta_super_like) VALUES ($1, $2, \'N\', \'Y\')', [matcherId, matchedId], (error, results) => {
 if(error)
 throw error
 else
 res.status(200).send('Liked successfully!')
})

}

const getMatchesOf = (req, res) => {
 const userId = parseInt(req.params.id);

 pool.query('SELECT * FROM getMatchesOf($1)', [userId], (error, results) => {
  if(error)
  throw error
  else
  res.header("Content-Type",'application/json');
  res.status(200).json(results.rows)
 })
}

module.exports = {
  likeUser,
  getMatchesOf
}
