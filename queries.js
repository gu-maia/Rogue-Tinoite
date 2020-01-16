const Pool = require('pg').Pool
var CryptoJS = require("crypto-js");
const pool = new Pool({
	user: 'me',
	host: 'localhost',
	database: 'tnt_core',
	password: 'password',
	port:     '5432'
})

const getUsers = (req, res) => {
  pool.query('SELECT * FROM tnt_users ORDER BY id ASC', (error, results) => {
   if(error) {
     throw error
   }
    res.status(200).json(results.rows)
  })

}

const getUserById = (req, res) => {
  const id = parseInt(req.params.id)

  pool.query('SELECT * FROM tnt_users WHERE id=$1',[id], (err, results) => {
   if(err) {
    throw err
   }

   res.status(200).json(results.rows)
  })
}

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

const createUser = (req, res) => {
//In production, the password will be saved in a encrypted form, of course, future integration with SSL and OAuth will be done. This is barely a scratch

const password = CryptoJS.MD5(req.body.password).toString()

let {  name
		 , email
		 , birth_date
		 , register_date
		 , sta_active
		 , sta_notifications
		 , gender_id} = req.body




 pool.query('INSERT INTO tnt_users (name, email, birth_date, register_date, password, sta_active, sta_notifications, gender_id) VALUES ($1, $2, $3, now(), $4, $5, $6, $7)',
           [name
					, email
					, birth_date
					, password
					, sta_active
					, sta_notifications
					, gender_id], (error, result) => {
   if(error) {
    throw error
   }

   res.status(200).send(`User added with ID: ${result.insertId}`)
 })

}

const updateUser = (req, res) => {
 const {name, email}  = req.body
 const id = parseInt(req.params.id)
 pool.query('UPDATE tnt_users SET name = $1, email = $2 where id = $3',[name, email, id], (error, results) => {

  if(error) {
   throw error
  }
  res.status(200).send('Usuário atualizado!')
 })

}

const deleteUser = (req, res) => {
      const id = parseInt(req.params.id)
      pool.query('DELETE FROM tnt_users WHERE id = $1', [id], (error,results) => {
       if(error){
	throw error
       }
      res.status(200).send(`The user with id: ${id} was deleted!`)
      })
}

module.exports = {
 getUsers,
 getUserById,
 createGender,
 createUser,
 updateUser,
 deleteUser
}
