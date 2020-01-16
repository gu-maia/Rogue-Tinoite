const Pool = require('pg').Pool
const pool = new Pool({
	user: 'me',
	host: 'localhost',
	database: 'tnt_core',
	password: 'password',
	port:     '5432'
})



const createGender = (req, res) => {

  const {
		gender
	, sta_active
} = req.body

pool.query('INSERT INTO tnt_genders (gender, sta_active) VALUES ($1, $2)', [gender, sta_active], (error, results) => {
	  if(error) {
			throw error
		}

		res.status(200).send(`Gender inserted with the id: ${results.insertId} `)
})
}



module.exports = {
 createGender
}
