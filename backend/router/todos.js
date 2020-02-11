const express = require("express");
const router = express.Router();
const controllers = require("../controllers/todos");

//delete data
router.delete("/:id", controllers.delete);

// show data
router.get("/", controllers.get);

//toggle
router.patch("/:id", controllers.patch);

// create data
router.post("/", controllers.post);

module.exports = router;
