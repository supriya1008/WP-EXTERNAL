const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); // Serve static files like HTML

// Routes
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/register", (req, res) => {
    const formData = req.body;
    console.log("Form Data:", formData);
    res.send("Registration Successful! Thank you for submitting.");
});

// Start Server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
