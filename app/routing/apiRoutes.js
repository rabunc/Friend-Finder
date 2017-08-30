var friendsArray = require("../data/friends.js");
module.exports = function (app) {


    app.get("/api/friends", function (req, res) {
        return res.json(friendsArray);
    });

    app.post("/api/friends", function (req, res) {
        var userInput = req.body;
        console.log("userInput = " + JSON.stringify(userInput))

        var bestMatch = {
            name: "Default Friend",
            img: "imgur.com",
            scores: [
                "10",
                "10",
                "10",
                "10",
                "10",
                "10",
                "10",
                "10",
                "10",
                "10"
            ]
        }
        bestMatchDifference = 100
        // Calculating the best match friend:
        // for each friend on record
        for (var i = 0; i < friendsArray.length; i++) {
            // calculate the difference between that friend's scores and the userInput scores
            var calculatedDifference = 0
            for (var j = 0; j < userInput.scores.length; j++) {
                calculatedDifference += Math.abs(friendsArray[i].scores[j] - userInput.scores[j])
                // if the calculated difference is less than the best match difference, update best match
            }
            console.log("Calculated Diff for " + friendsArray[i].name + " is  + " + calculatedDifference)
            if (calculatedDifference < bestMatchDifference) {
                bestMatchDifference = calculatedDifference
                bestMatch = friendsArray[i]
                console.log("Best match is: " + bestMatch.name)
                console.log("Best match difference is " + bestMatchDifference)
            } else {
                return
            }
        }
        friendsArray.push(req.body)
    })
}

