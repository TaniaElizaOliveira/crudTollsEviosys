import { Request, Response } from "express";
import Elemento from "./../database/models/elemento";



async function buscaElementos (req: Request, res: Response) {
	try {
		const elementos = await Elemento.findAll({});
		res.status(200).send(elementos);

	} catch (error) {
		res.status(500).send("Erro na obtenção de elementos");
	}
}

async function criaElemento (req: Request, res: Response) {
	try {
		await Elemento.create({
			numero_serie: req.body.numero_serie
		});
		res.status(200).send(true);

	} catch (error) {
		res.status(500).send("Erro na criação de elemento");
	}
}

async function atualizaElemento (req: Request, res: Response) {
	try {
		await Elemento.update({ nome: req.body }, { where: { id: req.body.id } });
		res.status(200).send(true);

	} catch (error) {
		res.status(500).send("Erro na atualização de elemento");
	}
}

async function apagaElemento (req: Request, res: Response) {
	try {
		await Elemento.destroy({ where: { id: req.params.id } });
		res.status(200).send(true);

	} catch (error) {
		res.status(500).send("Erro na exclusão de elemento");
	}
}

export default { buscaElementos, criaElemento, atualizaElemento, apagaElemento };