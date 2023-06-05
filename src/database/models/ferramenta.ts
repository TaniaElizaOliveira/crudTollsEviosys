
import Sequelize from "sequelize";
import db from "../db";

const Ferramenta = db.define("ferramenta", {
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
	status: {
		type: Sequelize.STRING,
		allowNull: false,
		defaultValue: "EM UTILIZAÇÃO"
	}
});

export default Ferramenta;