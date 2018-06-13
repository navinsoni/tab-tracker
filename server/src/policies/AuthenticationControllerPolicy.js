const Joi = require('joi')

module.exports = {
	register (req, res, next) {
		const schema = {
			email: Joi.string().email(),
			password: Joi.string().regex(new RegExp('^[0-9a-zA-Z]{8,32}$'))
		}

		const {error, value} = Joi.validate(req.body, schema)

		if (error) {
		switch (error.details[0].context.key){
			case 'email':
			  res.status(400).send({error: 'Enter valid email address!'})
			  break
			case 'password':
			  res.status(400).send({
			  	error: `Password should satisfy following conditions<br>1. Password can contain uppercase character, lowercase character, and numeric character<br>2. Password length should be between 8-32 characters`
			  })
			  break
			default:
			  res.status(400).send({
			  	error: 'Entered information is not correct!'
			})
		}
	    }
		else {
			next()
		}
	}
}