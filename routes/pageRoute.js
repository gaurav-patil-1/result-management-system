// Import necessary modules
const express = require("express");
const router = express.Router();
const path = require("path");

// Define routes for serving different pages
const pageRoutes = [
  { route: "/aboutus", page: "aboutUs.html" },
  { route: "/features", page: "features.html" },
  { route: "/instructions", page: "instructions.html" },
];

// Loop through the pageRoutes array and create routes for each page
pageRoutes.forEach((page) => {
  router.get(page.route, (req, res) => {
    try {
      const filePath = path.join(
        __dirname,
        `../public/pages/other/${page.page}`
      );
      res.sendFile(filePath);
    } catch (err) {
      console.error(`Error serving ${page.page}:`, err);
      res.status(500).send("Internal Server Error");
    }
  });
});

// Export the router for use in the main application
module.exports = router;
