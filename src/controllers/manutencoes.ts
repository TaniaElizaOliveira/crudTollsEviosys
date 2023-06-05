
import { Request, Response } from "express";
import Ordem from "./../database/models/ordem";
import dayjs from "dayjs";
import { Op } from "sequelize";


async function buscaManutencoes (req: Request, res: Response) {
	try {
		const mesPesquisado = dayjs(String(req.query.data),"YYYY-MM");
		const dataInicial = mesPesquisado.startOf("month").format("YYYY-MM-DD");
		const dataFinal = mesPesquisado.endOf("month").format("YYYY-MM-DD");

		const manutencoes = await Ordem.findAll({
			where:{ contemplado: req.query.nome,
				data:{
					[Op.gte]:dataInicial,
					[Op.lte]:dataFinal
				}
			}
		});
		res.status(200).send(manutencoes);

	} catch (error) {
		res.status(500).send("Erro na obtenção de manutenções");
	}
}

async function criaManutencao (req: Request, res: Response) {
	try {
		await Ordem.create(req.body);
		res.status(200).send(true);

	} catch (error) {
		res.status(500).send("Erro na criação de manutenção");
	}
}

async function atualizaManutencao (req: Request, res: Response) {
	try {
		await Ordem.update( { nome: req.body }, { where: { id: req.body.id } } );
		res.status(200).send(true);

	} catch (error) {
		res.status(500).send("Erro na atualização de manutenção");
	}
}

async function apagaManutencao (req: Request, res: Response) {
	try {
		await Ordem.destroy( { where: { id: req.params.id } } );
		res.status(200).send(true);

	} catch (error) {
		res.status(500).send("Erro na exclusão de manutenção");
	}
}

export default { buscaManutencoes, criaManutencao, atualizaManutencao, apagaManutencao};