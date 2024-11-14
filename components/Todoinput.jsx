import { useState } from "react"

export default function TodoInput(props){
    const {handleAddTodo, todovalue, settodovalue} = props
    
   
    return(

        
            <header>
                <input value={todovalue} onChange={(e) => {
                    settodovalue(e.target.value)
                }} placeholder='add todos...'/>
                <button onClick={() => {
                    handleAddTodo(todovalue)
                    settodovalue('')
                }}>add</button>
            </header>
       
      
    )
}