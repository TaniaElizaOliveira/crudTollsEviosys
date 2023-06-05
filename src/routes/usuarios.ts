import express from "express";
import usuario from "../controllers/usuarios";


const router = express.Router();


router.get("", usuario.buscaUsuarios);
router.post("", usuario.criaUsuario);
router.put("", usuario.atualizaUsuario);
router.delete("/:id", usuario.apagaUsuario);


export default router;