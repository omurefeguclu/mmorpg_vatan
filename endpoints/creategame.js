const ActiveGames = require("../game/active_games");
const Game = require("../game/game");

module.exports = (Discord, msg, args) => {
    const sender = msg.author;

    const activeGame = ActiveGames.find(x=>x.player1.id == sender.id);
    if(activeGame) {
        msg.reply('there is already an active game created by you');
    }
    else {
        var game = new Game(sender.id);

        ActiveGames.push(game);

        msg.reply('created game with id: ' + game.id);
    }
};