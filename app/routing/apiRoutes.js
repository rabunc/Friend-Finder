module.exports = function(app) {


app.get("/api/:friend?", function (req, res) {
  var chosen = req.params.friend;

  if (chosen) {
    console.log(chosen);

    for (var i = 0; i < friends.length; i++) {
      if (chosen === friends[i].routeName) {
        return res.json(friends[i]);
      }
    }
    return res.json(false);
  }
  return res.json(friends);
});

}