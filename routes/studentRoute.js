// Import the necessary modules and controllers
const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentcontroller");

// Route for displaying pages
router.get("/login", studentController.getLogin);
router.post("/login", studentController.postLogin);
router.get("/delete/:id", studentController.getDelete);
router.get("/edit/:id", studentController.getEdit);
router.post("/edit/:id", studentController.postEdit);
router.get("/moduleResult/:module", studentController.getModuleResult);
router.post("/editMarks/:module", studentController.postEditMarks);

// Export the router for use in the main application
module.exports = router;
