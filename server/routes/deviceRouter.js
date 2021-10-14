const Router = require("express");
const deviceRouter = require("../controllers/deviceController");
const router = new Router();

router.post("/", deviceRouter.createDevice);
router.get("/", deviceRouter.getAllDevice);
router.get("/:id", deviceRouter.getSingleDevice);

module.exports = router;
