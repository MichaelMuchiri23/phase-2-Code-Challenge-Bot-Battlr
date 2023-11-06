import React from "react";

function BotItem({bot, onAddClick}){
    function handleClick(){
        onAddClick(bot)
    }

    return(
      <div className="card" onClick={handleClick}>
        <div className="container" >
          <img src={bot.avatar_url} alt={bot.name} />
          <p>Name: {bot.name}</p>
          <p>Catchphrase:{bot.catchphrase}</p>
          <p>Health:{bot.health} Damage:{bot.damage} Armor:{bot.armor}</p>
        </div>
      </div>
    )
}

export default BotItem