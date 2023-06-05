import express from "express";
import ferramenta from "../controllers/ferramentas";
ferramenta

const router = express.Router();


router.get("", ferramenta.buscaFerramentas);
router.post("", ferramenta.criaFerramenta);
router.put("", ferramenta.atualizaFerramenta);
router.delete("/:id", ferramenta.apagaFerramenta);


export default router;