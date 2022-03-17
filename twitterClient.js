const {TwitterApi} = require("twitter-api-v2");

const client = new TwitterApi({
    appKey:"FCs7bCNPxEkkooSG3uPysJdNe",
    appSecret:"vLFEXJvyCwEOg0JaxYgr2ZkCWp5FnPagnpEBa520mQJnguPFeH",
    accessToken:"1299808305875947526-5xYkAW43HMMDCLO37MrIh3IDQXdEVO",
    accessSecret:"7CxhUi8kC8ITZEtADYyKlvuPa0f7LuzTF0exU2vGHe9Do"
});

const rwClient = client.readWrite;

module.exports = rwClient;