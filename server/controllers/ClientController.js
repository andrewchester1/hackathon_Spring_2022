const config = require('config.json')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const db = require('../helpers/db')
const Joi = require('joi')
const validateRequest = require('middleware/validate-request')
const {Op} = require('sequelize')
const moment = require('moment')

// function registerSchema(req, res, next) {
//     const schema = Joi.object({
//         firstName: Joi.string().required(),
//         lastName: Joi.string().required(),
//         email: Joi.string().required(),
//         password: Joi.string().min(6).required(),
// 		dob: Joi.string().min(6).required(),
// 		phone: Joi.string().min(6).required(),
// 		referral: Joi.string().allow('').optional()
//     });
//     validateRequest(req, next, schema);
// }

const createUser = async (req, res) => {
	const {email, password, firstName, lastName, dob, referral, phone} = req.body
	try {
		if (await db.User.findOne({where: {email: email}})) {
			res.status(422).json({message: 'Username already taken'})
		}

		if (password) {
			const hash = await bcrypt.hash(password, 10)
			const user = await db.User.create({email, hash, firstName, lastName, dob, referral, phone, points: 0, strikes: 0})

			res.status(200).json({user})
		}
	} catch (error) {
		console.log(error)
		res.status(500).json({message: 'Unable to create account.'})
	}
}

function authenticateSchema(req, res, next) {
	const schema = Joi.object({
		email: Joi.string().required(),
		password: Joi.string().required()
	})
	validateRequest(req, next, schema)
}

const authenticate = async (req, res) => {
	const {email, password} = req.body
	console.log('email', email, password)
	try {
		const user = await db.User.findOne({where: {email: email}})

		if (!user || !(await bcrypt.compare(password, user.hash))) {
			res.status(404).json({ message: NotFoundErrorMessage })
		}
		const token = jwt.sign({sub: user.id}, config.secret, {expiresIn: '7d'})
		res.status(200).json({user, token})
	} catch (error) {
		console.log(error)
		res.status(500).json({message: InternalServerErrorMessage})
	}
}

const verifyUser = async (req, res) => {
	try {
		const user = req.user
		if (!user) {
			return res.status(401).json({ message: 'Unauthorized' });
		}
		const findUser = await db.Roles.findAll({ include: [{model: db.Users, where: {id: user.id}}]})
		res.status(200).json(findUser[0])
	} catch (error) {
		console.log(error)
		res.status(500).json({message: InternalServerErrorMessage})
	}
}

module.exports = {
	createUser,
	authenticateSchema,
	authenticate,
	verifyUser,
}