const express = require("express");
const router = express.Router();
const teacherController = require("../controllers/teacherController");

// Route for displaying pages
router.get("/login", teacherController.getLogin);
router.post("/login", teacherController.postLogin);
router.get("/dashboard", teacherController.getDashboard);
router.post("/admitstudent", teacherController.postAdmitStudent);

// Export the router for use in the main application
module.exports = router;
