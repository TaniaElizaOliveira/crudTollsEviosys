
import { Request, Response } from "express";
import Ferramenta from "../database/models/ferramenta";


async function buscaFerramentas (req: Request, res: Response) {
	try {
		const ferramentas = await Ferramenta.findAll({});
		res.status(200).send(ferramentas);

	} catch (error) {
		res.status(500).send("Erro na obtenção de ferramentas");
	}
}

async function criaFerramenta (req: Request, res: Response) {
	try {
		await Ferramenta.create({
			nome: req.body.nome
		});
		res.status(200).send(true);

	} catch (error) {
		res.status(500).send("Erro na criação de ferramenta");
	}
}

async function atualizaFerramenta (req: Request, res: Response) {
	try {
		await Ferramenta.update( { nome: req.body.nome, status: req.body.status }, { where: { id: req.body.id } } );
		res.status(200).send(true);

	} catch (error) {
		res.status(500).send("Erro na atualização de ferramenta");
	}
}

async function apagaFerramenta (req: Request, res: Response) {
	try {
		await Ferramenta.destroy( { where: { id: req.params.id } } );
		res.status(200).send(true);

	} catch (error) {
		res.status(500).send("Erro na exclusão de ferramenta");
	}
}

export default { buscaFerramentas, criaFerramenta, atualizaFerramenta, apagaFerramenta };