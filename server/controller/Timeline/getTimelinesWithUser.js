const request = require("request");

const getTimelinesWithUser = (req, res, next) => {
  const username = req.query.username;

  request(
    `https://api.twitter.com/1.1/statuses/user_timeline.json`,
    { json: true },
    (err, res, body) => {
      if (err) {
        return console.log(err);
      }
      console.log(body);
    }
  );
};

module.exports = getTimelinesWithUser;
