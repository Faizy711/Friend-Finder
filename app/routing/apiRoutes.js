
// Dependencies
var friendData = require("../data/friends");

//Routing
module.exports = (app) =>{
    //GET
    app.get("/api/friends", (req, res) =>{
        res.json(friendData);
    });
    //POST
    app.post("/api/friends", (req, res) =>{
        //compatability logic?


    });

}



