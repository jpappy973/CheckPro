import React, { useEffect, useState } from "react";
import Create from "./create";
import "./App.css"
import axios from "axios";
import {BsFillTrashFill} from "react-icons/bs"


//
const now = new Date();
const time = now.toLocaleTimeString();
console.log(time); // Example output: "12:34:56 PM" (based on your locale)
const year = now.getFullYear();
const month = now.getMonth() + 1; // Months are 0-indexed (0 = January, 11 = December)
const date = now.getDate();


console.log(`Completed ${month}/${date}/${year}, Time: ${time}`);




const DisplayDoneList=()=>{
    const [done,setDone] =useState([])
    useEffect(()=>{
        axios.get('http://localhost:3001/getdone')
        .then(result=>setDone(result.data))
        .catch(err=>console.log(`Donelist${err}`))
        
    
        
    },[])

    const handleDelete=(id)=>{
        axios.delete('http://localhost:3001/deleteDone/'+id)
        .then(result=> {
            location.reload()
        })
        .catch(err=>console.log(err))
    }
    console.log(done)

    return(
        
        <div>
            <h2 style={{textAlign:"center"}}>Done</h2>

        <div>
        {
        done.map(d =>(

            <div className="task">

                        <div className="checkbox" >
                            
                            <p >{d.task}</p>
                        </div>
                        
                        <div>
                            <span><BsFillTrashFill 
                            onClick={()=>{
                                 

                                    handleDelete(d._id)
                                    

                                
                                
                            }
                            }
                            />
                            
                            </span>
                        </div>
                        
                    </div>
            

        )
    )
        }
        </div>
    </div>
    )
}

export default DisplayDoneList