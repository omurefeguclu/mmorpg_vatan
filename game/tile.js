module.exports = class Tile {
    object;

    constructor(){}

    isEmpty(){
        return this.object;
    }

    removeObject(){
        this.object = {};

        return this.object;
    }

    addObject(object){
        this.object = object;
    }
}