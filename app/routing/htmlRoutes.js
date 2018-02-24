//Path
var path = require("path");

//Routing
module.exports = (app) => {
    //HTML GET
    //Homepage get
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname,"../public/index.html"));
    });
    //Survey get
    app.get("/survey", (req, res) => {
        res.sendFile(path.join(__dirname,"../public/survey.html"));
    });
    //default get??
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    })
};