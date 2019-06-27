const {
  consumerKey,
  consumerSecret,
  accessTokenKey,
  accessTokenSecret
} = require("../../../config");
const Twitter = require("twitter");

const client = new Twitter({
  consumer_key: consumerKey,
  consumer_secret: consumerSecret,
  access_token_key: accessTokenKey,
  access_token_secret: accessTokenSecret
});

module.exports = client;
