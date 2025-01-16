import React, { useState } from "react";
import axios from "axios"
import "./App.css"

function Create(){
    const [task,setTask] = useState()
    

    const handleAdd =()=>{

        if(task.length === 0){
           return 
        }else{
            axios.post('http://localhost:3001/add',{task:task})
        .then(result => {
            location.reload()
        })
        .catch(err=>console.log(err))
        }
        
    }
    return(
        <div className="create_form">
            <h2 style={{textAlign:"center",marginBottom:"30px"}}>Checklist Pro</h2>
            
            <input type="text" name="" id="" placeholder="What Would You Like To Do?" onChange={(e)=>setTask(e.target.value)} />
            <button type="button" onClick={handleAdd}>Add</button>
        </div>
    )
}

export default Create