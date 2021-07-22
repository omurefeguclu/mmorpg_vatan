const TileObject = require("./tile_object");

module.exports = class Player extends TileObject {
    id;

    constructor(x, y, userId){
        super(x, y);
        this.id = userId;
    }
}