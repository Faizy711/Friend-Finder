// Dependencies
var friendData = require("../data/friends.js");

//Routing
module.exports = (app) =>{
    //GET
    app.get("/api/friends", (req, res) =>{
        res.json(friendData);
    });
    //POST
    app.post("/api/friends", (req, res) =>{
        //compatability logic?
        //We need to calculate the difference of the two score arrays. We have an required array from friend data and the user input
        //Variable Arrays
        //req.body from new character post from Star Wars game, req.body hosts is equal to the JSON post sent from the user
        var newinputArr = req.body;
        //json parse the friendData
        var friendArr = JSON.parse(friendData);

        //totalDifference call on the difference function
        var diffArr = DifferenceFunc(newinputArr, friendArr);

        //sort the array
        diffArr.sort(function(a, b){return a - b});

        //push input array
        friendData.push(newinputArr);

        //return the smallest difference in array
        res.json(diffArr);

    });
}
//Another function that will calculate the differences in the two Arrays
var DifferenceFunc = function (newinputArr,friendArr) {
    //we have to go through each person and then calculate the difference of score
    //for loop for each person in friendArr
    //get score arrays from each array?
    //we go through every person
    for(var i=0; i < friendArr.length; i++){
        //a difference variable
        var difference = 0
        //another for loop going through the scores and calculating the difference which we then compare to each friend going through the outside loop
        for(var i=0; i<newinputArr.scores.length; i++) {
			difference += Math.abs(newinputArr.scores[i] - friendArr.scores[i]) 
        }
        //store the difference, im not sure if this works
        friendArr.difference = difference;
    }
    return friendArr;
};



