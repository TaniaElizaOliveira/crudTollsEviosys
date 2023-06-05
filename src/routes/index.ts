import express from "express";
import elementos from "./elementos";
import ferramentas from "./ferramentas";
import usuarios from "./usuarios";
import manutencoes from "./manutencoes"

const router = express.Router();


router.use("/usuarios", usuarios);
router.use("/ferramentas", ferramentas);
router.use("/elementos", elementos);
router.use("/ordens", manutencoes);


export default router;