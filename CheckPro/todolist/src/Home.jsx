import React, { useEffect, useState } from "react";
import Create from "./create";
import "./App.css"
import axios from "axios";
import DisplayDoneList from "./donelist";
import {BsFillCheckCircleFill,BsCircleFill,BsFillTrashFill} from "react-icons/bs"
//import {BsCirleFill,BsFillTrashFill} from 'react-icon/bs';



function Home(){
    const [todos,setTodos] = useState([])
    
    
    useEffect(()=>{
        axios.get('http://localhost:3001/get')
        .then(result=> setTodos(result.data))
        .catch(err=>console.log(err))
        

        
    },[])

    const donelist=(task)=>{
        const now = new Date();
        const time = now.toLocaleTimeString();
       
        const year = now.getFullYear();
        const month = now.getMonth() + 1; // Months are 0-indexed (0 = January, 11 = December)
        const date = now.getDate();
        const donetimestamp = `Completed ${month}/${date}/${year}, Time: ${time}`;

        const formatedTesk = `${task} : ${donetimestamp}`
        axios.post('http://localhost:3001/done',{task:formatedTesk})
        .then(result => {
            console.log(result)
        })
        .catch(err=>console.log(err))
        }
    

    const handleEdit=(id)=>{
        axios.put('http://localhost:3001/update/'+id)
        .then(result=> {
            location.reload()
        })
        .catch(err=>console.log(err))

    }

    

    const handleDelete=(id)=>{
        axios.delete('http://localhost:3001/delete/'+id)
        .then(result=> {
            location.reload()
        })
        .catch(err=>console.log(err))
    }
    

    return(
        <div className="home">
            
            <div style={{marginTop:"100px"}}>
            <Create/>
            </div>
            <h2>To Do List</h2>
            {
                todos.length === 0
                ?
                <div><h2>No Record</h2></div>
                :
                todos.map(todo =>(
                    
                    <div className="task">

                        <div className="checkbox" onClick={()=>{
                            donelist(todo.task)
                            handleEdit(todo._id)
                            handleDelete(todo._id)
                        }
                            
                            }>
                            {todo.done ?
                                <BsFillCheckCircleFill className="icon"/>
                                :<BsCircleFill className="icon"/>
                             }


                           
                            <p className={todo.done ? "line_through": ""}>{todo.task}</p>
                        </div>
                        
                        
                        
                    </div>

                    
                    
                    
                    
                ))
                
                
                
            }
            <DisplayDoneList/>

            
            

        </div>
    )
}

export default Home