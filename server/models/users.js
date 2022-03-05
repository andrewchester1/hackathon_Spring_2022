const {DataTypes} = require('sequelize')

module.exports = model

function model(sequelize) {
	const attributes = {
		firstName: {type: DataTypes.STRING, allowNull: false},
		lastName: {type: DataTypes.STRING, allowNull: false},
		dob: {type: DataTypes.STRING, allowNull: false},
		phone: {type: DataTypes.STRING, allowNull: false},
		email: {type: DataTypes.STRING, allowNull: false},
		hash: {type: DataTypes.STRING, allowNull: false},
		profilePicture: {type: DataTypes.STRING, allowNull: true},
		// strikes: {type: DataTypes.INTEGER, allowNull: false}
	}

	const options = {
		defaultScope: {
			// exclude hash by default
			attributes: {exclude: ['hash']}
		},
		scopes: {
			// include hash with this scope
			withHash: {attributes: {}}
		}
	}

	return sequelize.define('Users', attributes, options)
}