const rwClient = require("./twitterClient.js");

const tweet = async() => {
    try {
        await rwClient.v1.tweet("Vasco da Gama!!");
    } catch(e) {
        console.error(e)
    }
}

/* const job = new CronJob("0 5 * * * *", () => {
    console.log('cron job starting');
    tweet();
}) */

tweet()