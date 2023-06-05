
import { Request, Response } from "express";
import Usuario from "./../database/models/usuario";



async function buscaUsuarios (req:Request, res:Response) {
	try {
		const usuario:any = await Usuario.findOne({
			where:{
				nome:req.query.nome,
				senha: req.query.senha
			}
		});

		if (usuario)
		    res.status(200).send(usuario);
		else
			res.status(500).send(false);

	} catch (error) {
		res.status(500).send(false);
	}}

async function criaUsuario (req:Request, res:Response) {
	try {
		await Usuario.create(req.body);
		res.status(200).send(true);
	} catch (error) {
		res.status(500).send(error);
	}


}

async function atualizaUsuario (req:Request, res:Response) {
	try {
		console.log("aa");
		res.status(200).send("ok");
	} catch (error) {
		res.status(500).send("ok");
	}
}

async function apagaUsuario (req:Request, res:Response) {
	try {
		await Usuario.destroy( { where: { id: req.params.id } } );
		res.status(200).send(true);

	} catch (error) {
		res.status(500).send("Erro na exclusão de usuário");
	}
}

export default { buscaUsuarios, criaUsuario, atualizaUsuario, apagaUsuario};