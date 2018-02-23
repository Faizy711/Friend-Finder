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
        var userinputArr = req.body;
        //json parse the friendData
        var friendArr = friendData;
        console.log(userinputArr);
        console.log(friendArr);
        var matchFriend = differenceFunc(userinputArr,friendArr);
        console.log(matchFriend);
        //totalDifference call on the difference function
       
        //min difference is the closest match
        // var min = Math.min.apply(null, differenceArr);
        // dont know if I need this?

        res.json(matchFriend);
        
        //return the smallest difference in array
        

    });
}
//Another function that will calculate the differences in the two Arrays
var differenceFunc = (newinputArr, friendArr) => {
    //we have to go through each person and then calculate the difference of score
    //for loop for each person in friendArr
    //get score arrays from each array?
    //we go through every person
    var newArr = newinputArr["scores[]"];
    //lowest diff variable to compare the next difference coming in
    var lowestDiff = 1000;
    
    
    for (var i = 0; i < friendArr.length; i++) {
        //a difference variable
        var difference = 0;
        //ScoreArray for the array of scores
        var scoresArr = friendArr[i].scores;
        //another for loop going through the scores and calculating the difference which we then compare to each friend going through the outside loop
        for (var j = 0; j < newArr.length; j++) {
            difference += Math.abs(newArr[j] - scoresArr[j])
        }
        //console logging for debugging
        console.log(difference);
        console.log(lowestDiff);
        //if statement to compare the lowest diff
        if(difference <= lowestDiff){
            //if it is lower than at least 1000 then it will place the that friend array as the returned array and make lowestdiff = difference
            var matchingFriend = friendData[i];
            lowestDiff = difference;
        }
        console.log(matchingFriend);
    }
    return matchingFriend;
};






// var findMatch = function (differenceArr) {
//     //for loop that goes through all the matches to see 
//     var matchingFriendCount = 0
//     for (var i = 0; i < differenceArr.length; i++) {
//         if (differenceArr[i] <= differenceArr[matchingFriendCount]) {
//             matchingFriendCount = i;
//         }
//     }
//     return matchingFriendCount;
// };




