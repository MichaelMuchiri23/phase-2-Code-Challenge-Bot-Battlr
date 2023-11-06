import React from "react";

function YourBotArmy({enlist, render, setRender, onDelete}){
    function handleRemoveClick(){
        setRender(false)
    }

    function handleDelete(){
       fetch(`http://localhost:3000/bots/${enlist.id}`, {
        method: "DELETE"
       })
       .then(() => onDelete(enlist))
    }

    return(
        <div className="top-level">
         {render
          ?  <div className="card-2" onClick={handleRemoveClick}>
                <img src={enlist.avatar_url} alt={enlist.name} />
                <p>Name: {enlist.name}</p>
                <p>Catchphrase:{enlist.catchphrase}</p>
                <p>Health:{enlist.health} Damage:{enlist.damage} Armor:{enlist.armor}</p>
                <button style={{color: "red"}} onClick={handleDelete}>X</button>
             </div>
          :<h1 className="header">Scroll down for bot warriors</h1>}
        </div>
    )
}

export default YourBotArmy