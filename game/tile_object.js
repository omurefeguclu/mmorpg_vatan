module.exports = class TileObject {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    move(x, y) {
        this.x = x;
        this.y = y;
    }
}