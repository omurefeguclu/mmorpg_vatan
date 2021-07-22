const sharp = require('sharp');

module.exports = function (game) {
    const id = `${game.id}-${Math.random().toString('36').substr(2,7)}`;
    
    var image = sharp('./assets/rpg_map.png');
    return image.metadata()
    .then(function(metadata){
        const margin = 2;
        const xTileWidth = Math.floor((metadata.width - (game.gameManager.width * margin)) / game.gameManager.width);
        const yTileWidth = Math.floor((metadata.height - (game.gameManager.height * margin)) / game.gameManager.height);
        const offsetX = xTileWidth / 2;
        const offsetY = yTileWidth / 2;

        image = image.webp({quality: 90});
        image = image.composite([
            {
                input: './assets/player.png',
                left: Math.floor((xTileWidth * 5) - offsetX),
                top: metadata.height - Math.floor((yTileWidth * 5) - offsetY)
            }
        ]);

        return image.toFile(`./outputs/${id}.png`)
        .then(info=>{
            return `./outputs/${id}.png`;
        });
    })
    
};