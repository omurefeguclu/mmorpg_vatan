const GameManager = require("./game_manager");

module.exports = class Game {
    id;

    gameManager;

    player1;
    player2;

    constructor(creatorUserId){
        this.id = Math.random().toString(36).substr(2, 9);

        this.gameManager = new GameManager(20, 20);
        
        this.player1 = this.gameManager.spawnPlayer(creatorUserId);
    }

    userJoined(userId) {
        this.player2 = this.gameManager.spawnPlayer(userId);
    }

};