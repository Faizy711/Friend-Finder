// Dependencies
var friendData = require("../data/friends.js");
//Routing
module.exports = (app) => {
    //GET
    app.get("/api/friends", (req, res) => {
        res.json(friendData);
    });
    //POST
    app.post("/api/friends", (req, res) => {
        //compatability logic?
        //We need to calculate the difference of the two score arrays. We have an required array from friend data and the user input
        //Variable Arrays
        //req.body from new character post from Star Wars game, req.body hosts is equal to the JSON post sent from the user
        var newinputArr = req.body;
        //json parse the friendData
        console.log(newinputArr);
        var friendArr = JSON.parse(JSON.stringify(friendData));
        console.log(friendArr);
        differenceArr = [];
        //totalDifference call on the difference function
        differenceArr = differenceFunc(friendArr, newinputArr);
        console.log(differenceArr);
        //min difference is the closest match
        var min = Math.min.apply(null, differenceArr);
        //find match function
        var matchArr = findMatch(min,differenceArr);
        console.log(matchArr);
        
        //return the smallest difference in array
        res.json(matchArr);

    });
}
//Another function that will calculate the differences in the two Arrays
var differenceFunc = (friendArr, newinputArr) => {
    //we have to go through each person and then calculate the difference of score
    //for loop for each person in friendArr
    //get score arrays from each array?
    //we go through every person
    var differenceArr = [];
    for (var i = 0; i < friendArr.length; i++) {
        //a difference variable
        var difference = 0
        //another for loop going through the scores and calculating the difference which we then compare to each friend going through the outside loop
        for (var i = 0; i < newinputArr.scores.length; i++) {
            difference += Math.abs(newinputArr.scores[i] - friendArr.scores[i])
        }
        //store the difference, im not sure if this works
        differenceArr.push(difference);
    }
    return differenceArr;
    console.log(differenceArr);
};

var findMatch = function (min, differenceArr) {
    //for loop that goes through all the matches to see 
    var matchingFriendArr = [];
    for (var i = 0; i < differenceArr.length; i++) {
        if (differenceArr[i] === min) {
            matchingFriendArr.push(friendData[i]);
        }
    }
    return matchingFriendArr;
};




