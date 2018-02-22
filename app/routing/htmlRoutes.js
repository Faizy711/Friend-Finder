//Path
var path = require("path");

//Routing

module.exports = (app) => {
//HTML GET
    app.get("/home", (req, res) => {
        res.sendFile(path.join(__dirname,"../public/home.html"));
    });

    app.get("/survey", (req, res) => {
        res.sendFile(path.join(__dirname,"../public/survey.html"));
    });
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    })
};