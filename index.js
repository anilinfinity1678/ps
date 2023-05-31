const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set("view engine", "ejs");

// Set the views directory
app.set("views", __dirname + "/view");
app.use("/public", express.static(path.join(__dirname, "public")));

// Define a route to render the index.ejs template
app.get("/", (req, res) => {
    const tree = {
        treeName: "Oak Tree",
        id: 1,
        height: 10,
        scientificName: "anil",
        diameter: 50,
        lattitude: 37.7749,
        longitude: -122.4194,
        carbonEmission: 6.8,
        AnualCarbon: 0.5,
        benefits: `1. Cools blood: Blood in the stool, haematuria, excessive uterine bleeding, bleeding haemorrhoids
        2. Restrains blood: Bleeding from the lower orifices, bloody sputum, nosebleed
        3. Stops bleeding: Blood in the stool
        4. Cools heat: Heat in the Liver: reddened eyes, dizziness
        5. Descends the yang: Reddened eyes, dizziness, headache, hypertension
        6. Drains damp-heat: Intestinal bleeding, haemorrhoids, bleeding dysenteric disorders`,
    };
    res.render("index", { tree });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
