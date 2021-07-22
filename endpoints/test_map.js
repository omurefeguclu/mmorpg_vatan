const mapBuilder = require("../game/map_builder");
const ActiveGames = require("../game/active_games");

module.exports = (Discord, msg, args) => {
    const game = ActiveGames[0];
    mapBuilder(game).then(filePath=>{
        
    const attachment = new Discord.MessageAttachment(filePath, 'rpg_map.png');

    msg.channel.send({
      embed: {
        files: [
          attachment
        ],
        image: {
          url: 'attachment://rpg_map.png'
        }
      }
    });
    });
};