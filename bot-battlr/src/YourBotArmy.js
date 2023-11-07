import React from "react";

function YourBotArmy({enlist, render, setEnlist, onDelete}){
    function handleRemoveClick(event){
        const filtered = enlist.filter((obj) => {
            return(
                obj.id !== parseInt(event.currentTarget.id)
            )
        })
        setEnlist(filtered)
    }

    function handleDelete(event){
       fetch(`http://localhost:3000/bots/${event.target.id}`, {
        method: "DELETE"
       })
       .then(() => onDelete(event.target.id))
    }

    const drafted = enlist.map((obj) => {
        return(
            <div className="card-2" onClick={handleRemoveClick} key={obj.id} id={obj.id}>
              <img src={obj.avatar_url} alt={obj.name} />
              <p>Name: {obj.name}</p>
              <p>Catchphrase:{obj.catchphrase}</p>
              <p>Health:{obj.health} Damage:{obj.damage} Armor:{obj.armor}</p>
              <button id={obj.id} style={{backgroundColor: "red", color:"white"}} onClick={handleDelete}>X</button>
            </div>
        )
    })

    return(
        <div className="top-level">
         {render
          ?  drafted
          :<h1 className="header">Scroll down for bot warriors</h1>}
        </div>
    )
}

export default YourBotArmy