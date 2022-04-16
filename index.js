const rwClient = require("./twitterClient.js");

const tweets = ["Vasco!", "Vasco da Gama!", "Amor que não se explica, tudo passa e o Vasco fica!", "Que a cruz de malta seja minha luz e meu guia.", "Gigante da colina!", "Vamos todos cantar de coração. A cruz de malta é o meu pendão!", "Vestir uma camisa que já vem até com faixa de campeão é coisa de predestinado.", "...Não digo que sou um Vascaíno doente, pois doente é quem não é Vascaíno..."]

const tweet = async() => {
    const string = "Au au (" + tweets[Math.floor(Math.random() * tweets.length)] + ")";
    try {
        await rwClient.v1.tweet(string);
    } catch(e) {
        console.error(e)
    }
}

tweet()
setTimeout(tweet, 1000*60*60)
