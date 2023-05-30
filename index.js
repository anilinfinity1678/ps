const express = require("express");
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set("view engine", "ejs");

// Set the views directory
app.set("views", __dirname + "/view");

// Define a route to render the index.ejs template
app.get("/", (req, res) => {
    const tree = {
        name: "Oak Tree",
        id: 1,
        height: 10,
        scientific: "anil",
        age: 50,
        latitude: 37.7749,
        longitude: -122.4194,
        carbonEmission: 6.8,
        AnualCarbon: 0.5,
        facts: "jfkd,ds,lf.dkxk",
    };
    res.render("index", { tree });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
