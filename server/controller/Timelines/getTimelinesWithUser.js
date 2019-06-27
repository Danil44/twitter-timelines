const client = require("./clientTwitter");

const getTimelinesWithUser = (req, res, next) => {
  const username = req.query.username;
  const params = { screen_name: username };

  client.get("statuses/user_timeline", params, (err, tweets, response) => {
    if (err) console.log(err);

    res.json(tweets);
  });
};

module.exports = getTimelinesWithUser;
