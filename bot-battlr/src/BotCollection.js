import React, {useState} from "react";
import BotItem from "./BotItem";
import YourBotArmy from "./YourBotArmy";

function BotCollection({bots}){
    const [enlist, setEnlist] = useState({})
    const [render, setRender] = useState(false)

    function handleSelectClick(selected){
        console.log(selected)
        setRender(true)
        setEnlist(selected)
     }

    const warriors = bots.map((bot) => {
       return <BotItem bot={bot} onAddClick={handleSelectClick} />
    })

    return(
        <div>
            <h1 id="title">GET YOUR CHAMPIONS HERE!!!</h1>
            <YourBotArmy enlist={enlist} render={render} />
            {warriors}
        </div>
    )
}

export default BotCollection