
import Sequelize from "sequelize";
import db from "../db";

const Usuario = db.define("usuario", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	nome: {
		type: Sequelize.STRING,
		allowNull: false
	},
	senha: {
		type: Sequelize.STRING,
		allowNull: false
	}
});

export default Usuario;