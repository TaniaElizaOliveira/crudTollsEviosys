
import Sequelize from "sequelize";
import db from "../db";

const Elemento = db.define("elemento", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	numero_serie: {
		type: Sequelize.STRING,
		allowNull: false
	},
	status: {
		type: Sequelize.STRING,
		allowNull: false,
        defaultValue: "EM UTILIZAÇÃO"
	}
});

export default Elemento;