const express = require("express");
const router = express.Router();
const path = require("path");

// Define a route to serve the home page
router.get("/", (req, res) => {
  try {
    const filePath = path.join(__dirname, "../public/pages/homepage/home.html");
    res.sendFile(filePath);
  } catch (err) {
    console.error("Error serving home page:", err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
