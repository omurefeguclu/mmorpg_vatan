const Player = require("./player");
const Tile = require("./tile");

module.exports = class GameManager {
    grid;
    width;
    height;

    constructor(width, height){
        this.grid = [];
        this.width = width;
        this.height = height;
        for(var x = 0; x < width; x++) {
           this.grid[x] = [];
            for(var y = 0; y < height; y++) {
                this.grid[x][y] = new Tile();
            }
        }
    }

    spawnPlayer(userId) {
        var x = Math.floor(Math.random() * this.width);
        var y = Math.floor(Math.random() * this.height);

        var player = new Player(x, y, userId);
        this.grid[x][y] = player;

        return player;
    }
}
