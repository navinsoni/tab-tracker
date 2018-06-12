const {User} = require('../models')
module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (err) {
      // statements
      console.log(err)
      res.send({error: `Email ${req.body.email} already in use!`})
    }
  }
}
