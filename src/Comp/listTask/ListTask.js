import React ,{useState}from "react";
import { useSelector } from "react-redux";
import Task from '../task/Task'
const ListTask =()=>{



const list = useSelector((state)=>state.listReducer.listeTasks);
const [status,setStatus]=useState("ALL");



return(

    <div>
        <button  onClick={()=>setStatus("All")}>ALL</button>
        <button onClick={()=>setStatus("Done")}>Done</button>
        <button onClick={()=>setStatus("Undone")}>Undone</button>

{status === "Done"
? list
   .filter((el)=> el.isDone === true)
   .map((el)=><Task task={el} key={el.id} /> )

   :status ==="Undone"
   ?list
   .filter((el)=> el.isDone === false)
   .map((el)=><Task task={el} key={el.id} /> )
   :list.map((el)=><Task task={el}key={el.id}/>)

  }
    </div>
);
};
export default ListTask