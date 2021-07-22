const ActiveGames = require("../game/active_games");
const Game = require("../game/game");

module.exports = (Discord, msg, args) => {

    const gameid = args[0];
    const sender = msg.author;

    const foundGame = ActiveGames.find(x=>x.id == gameid && !x.player2);
    if(!foundGame) {
        msg.reply('there is no game found with id: ' + gameid);
    }
    else {
        foundGame.userJoined(sender.id);

        msg.reply('joined game with id: ' + foundGame.id);
    }
};