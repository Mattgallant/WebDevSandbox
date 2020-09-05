const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const logger = require("./middleware/logger");
const members = require("./Members");

const app = express();

// Init middleware
app.use(logger);

// Handlebars Middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Home page route
app.get("/", (req, res) => {
    res.render("index", { title: "Members App", members });
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Members API routes
app.use("/api/members", require("./routes/api/members"));

const PORT = process.env.PORT || 5000; //When we deploy, server most likely wont use 5000, check env variables

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
