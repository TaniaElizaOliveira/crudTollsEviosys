import express from "express";
import cors from "cors";
import routes from "./routes";
import db from "./database/db";
import Elemento from "./database/models/elemento";
import Usuario from "./database/models/usuario";
import Ferramenta from "./database/models/ferramenta";
import Ordem from "./database/models/ordem";



// porta do servidor
const PORT = process.env.PORT || 4000;

// host do servidor
const HOSTNAME = process.env.HOSTNAME || "http://localhost";

const app = express();
app.use(express.json());

// DESCOMENTAR SOMENTE PARA CRIAÇÃO DO BANCO

// const elemento = new Elemento();
// const usuario = new Usuario();
// const ferramenr = new Ferramenta();
// const Orsdem = new Ordem();

// (async () => {
// 	try {
// 		console.log(db);
// 		const resultado = await db.sync();
// 		console.log(resultado);
// 	} catch (error) {
// 		console.log(error);
// 	}
// })();

// Rotas
app.use(cors({
	origin: ["http://localhost:4200"]
}));
app.use("/api", routes);

app.get("/", (req, res) => {
	res.send("Bem-vindo!");
});


// Resposta padrão para quaisquer outras requisições:
app.use((req, res) => {
	res.status(404);
});
// Inicia o sevidor
app.listen(PORT, () => {
	console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`);
});