const Router = require("express");
const itemController = require("./controller");
const router = Router();

router.post("/delete", itemController.deleteItem);
router.get("/", itemController.getItems);
router.post("/", itemController.createItem);
router.post("/:id", itemController.updateItem);

module.exports = router;
