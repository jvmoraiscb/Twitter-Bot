const {TwitterApi} = require("twitter-api-v2");

const client = new TwitterApi({
    appKey:"CE9PEZpHFJnHTwQperIV0u6ig",
    appSecret:"HIid2dfTPM8T1Y4dGhgzQ6KiJo1yE3xHRHgyGFkQZZKsdgodIA",
    accessToken:"1299808305875947526-zRqukT8UikjqPhcQSB9I3VI5Y5eAqc",
    accessSecret:"VXKr8ibGRaqFIdH9oYU8Xbmkg0WwVjG0ZxOuLAFWVJ20h"
});

const rwClient = client.readWrite;

module.exports = rwClient;