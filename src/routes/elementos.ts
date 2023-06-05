import express from "express";
import elemento from "../controllers/elementos";


const router = express.Router();


router.get("", elemento.buscaElementos);
router.post("", elemento.criaElemento);
router.put("", elemento.atualizaElemento);
router.delete("/:id", elemento.apagaElemento);


export default router;