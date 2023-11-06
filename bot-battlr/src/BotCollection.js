import React, {useState} from "react";
import BotItem from "./BotItem";
import YourBotArmy from "./YourBotArmy";

function BotCollection({bots, setBots}){
    const [enlist, setEnlist] = useState({})
    const [render, setRender] = useState(false)

    function handleSelectClick(selected){
        setRender(true)
        setEnlist(selected)
     }

    function handleDeleteClick(remove){
       const removed = bots.filter((bot) => {
        return bot.id !== remove.id
       })

       setBots(removed)
    } 

    const warriors = bots.map((bot) => {
       return <BotItem bot={bot} onAddClick={handleSelectClick} />
    })

    return(
        <div>
            <h1 id="title">GET YOUR CHAMPIONS HERE!!!</h1>
            <YourBotArmy enlist={enlist} render={render} setRender={setRender} onDelete={handleDeleteClick} />
            {warriors}
        </div>
    )
}

export default BotCollection