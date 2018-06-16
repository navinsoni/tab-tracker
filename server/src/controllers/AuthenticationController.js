const {User} = require('../models')
module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (err) {
      // statements
      res.status(400).send({error: `Email ${req.body.email} already in use!`})
    }
  },
  async login (req, res) {
    try {
      const {email, password} = req.body
      const user = await User.findOne({where:{"email":email}})
      if(!user){
      	return res.status(403).send({error: `Invalid login details!`})
      }
      const isValidPassword = password === user.password

      if (!isValidPassword){
      	return res.status(403).send({error: `Invalid login details!`})
      }
      res.send(user.toJSON())
    } catch (err) {
      // statements
      res.status(500).send({error: `Please try again later!`})
    }
  }
}
