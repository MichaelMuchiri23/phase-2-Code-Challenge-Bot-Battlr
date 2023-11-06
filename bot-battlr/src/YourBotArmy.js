import React from "react";

function YourBotArmy({enlist, render}){

    return(
        <div className="top-level">
         {render
          ?  <div className="card-2">
                <img src={enlist.avatar_url} alt={enlist.name} />
                <p>Name: {enlist.name}</p>
                <p>Catchphrase:{enlist.catchphrase}</p>
                <p>Health:{enlist.health} Damage:{enlist.damage} Armor:{enlist.armor}</p>
                <button style={{color: "red"}}>X</button>
             </div>
          :<h1>Scroll down for bot warriors</h1>}
        </div>
    )
}

export default YourBotArmy