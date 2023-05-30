// Import dependencies
const express = require("express");

// Create the Express app
const app = express();

// Set the view engine to EJS
app.set("view engine", "ejs");

// Start the server
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
