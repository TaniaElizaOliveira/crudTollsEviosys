import { Sequelize } from "sequelize";
const db = new Sequelize("postgres://nxedtrki:vwDu44Vc1JAz2HvlOr5v3W36J1nPW5va@lucky.db.elephantsql.com/nxedtrki", {dialect: "postgres",define:{freezeTableName:true,timestamps: false}});
export default db;

