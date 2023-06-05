import express from "express";
import manutencao from "../controllers/manutencoes";

const router = express.Router();


router.get("", manutencao.buscaManutencoes);
router.post("", manutencao.criaManutencao);
router.put("", manutencao.atualizaManutencao);
router.delete("/:id", manutencao.apagaManutencao);


export default router;