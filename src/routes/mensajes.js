const { Router } = require("express");
const { validarJWT } = require("../middlewares/validar-jwt");
const { obtenerchat } = require("../controllers/mensajes");

const router = Router();

router.get("/:de", validarJWT, obtenerchat);

module.exports = router;
