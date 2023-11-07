import React, {useState} from "react";
import BotItem from "./BotItem";
import YourBotArmy from "./YourBotArmy";

function BotCollection({bots, setBots}){
    const [enlist, setEnlist] = useState([])
    const [render, setRender] = useState(false)

    function handleSelectClick(selected){
        setRender(true)
        if(enlist.includes(selected)){
            return null
        }else{
            setEnlist([...enlist, selected])
        }
     }

    function handleDeleteClick(remove){
       const removed = bots.filter((bot) => {
        return bot.id !== parseInt(remove)
       })

       setBots(removed)
    } 

    const warriors = bots.map((bot) => {
       return <BotItem key={bot.id} bot={bot} onAddClick={handleSelectClick} />
    })

    return(
        <div>
            <h1 id="title">GET YOUR CHAMPIONS HERE!!!</h1>
            <YourBotArmy enlist={enlist} render={render} setEnlist={setEnlist} onDelete={handleDeleteClick} />
            {warriors}
        </div>
    )
}

export default BotCollection