const {Router} = require("express");
const router = Router();

const employs = require("../controllers/employs.js");

router.get("/", employs.obtenerempleados);

router.post("/", employs.crearempleado);

router.get("/:id", employs.obtenerempleado);

router.put("/:id", employs.editarempleado);

router.delete("/:id", employs.eliminarempleado);

module.exports = router;