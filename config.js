const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  consumerKey: process.env.CONS_KEY,
  consumerSecret: process.env.CONS_SECRET_KEY,
  accessTokenKey: process.env.ACCESS_TOKEN,
  accessTokenSecret: process.env.ACCESS_SECRET
};
