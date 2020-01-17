const User = require('../models/Users')

module.exports = {

  async index(req, res) {
    const users = await User.findAll();
    return res.json(users);
  },

  async store(req, res) {
   const {name, email, birth_date, password, gender_id, sta_active, sta_receive_notifications} = req.body;

   const user = await User.create({ name, email, birth_date, password, gender_id, sta_active, sta_receive_notifications });
   return res.json(user);
 }
};
