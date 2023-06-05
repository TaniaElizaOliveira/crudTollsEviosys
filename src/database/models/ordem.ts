
import Sequelize from "sequelize";
import db from "../db";

const Ordem = db.define("ordem", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	contemplado: {
		type: Sequelize.STRING,
		allowNull: false
	},
	descricao: {
		type: Sequelize.TEXT,
		allowNull: false
	},
	data:{
		type: Sequelize.DATEONLY,
		defaultValue: Date.now()

	}
});

export default Ordem;