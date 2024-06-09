import { useEffect, useState } from "react";
import List from "./List";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css'

function App() {
  const added = () => toast.success("Item Added");
  

  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  console.log(completedTasks)

  useEffect(()=>{
    if(localStorage.getItem("tasks")){
     let arr = JSON.parse(localStorage.getItem("tasks"));
     setTasks(arr);
    }
    if(localStorage.getItem("completed")){
      let arr = JSON.parse(localStorage.getItem("completed"));
      setCompletedTasks(arr);
     }
  },[])


  useEffect(()=>{
      localStorage.setItem("completed", JSON.stringify(completedTasks));
  },[completedTasks])

  
  useEffect(() => {
  if (tasks.length >=1)
      {localStorage.setItem("tasks", JSON.stringify(tasks));}
  else{
    localStorage.removeItem("tasks");
    localStorage.removeItem("completed");
  }
  }, [tasks]);

  function handleSubmit(e) {
    e.preventDefault();
    if(inputValue ==''){
      alert("enter a bud")
      return
    }
      const obj = {};
      obj.task = inputValue;
      obj.id = Date.now();
      setTasks([...tasks, obj]); 
      setInputValue("");
  }

  function handleDelete(idToDelete) {
   toast.success("Item Deleted");
   setTasks(
      tasks.filter((task) => {
        return task.id !== idToDelete;
      })
    )
  }


  function handleCompleted(idToMarkComplete) {
    setCompletedTasks([...completedTasks, idToMarkComplete]);
  }

  

  return (<>
 
    <ToastContainer/>
    <div id="grocery">
      <h1>Grocery Bud</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button id="add" type="submit" onClick={added}>
          Add Item
        </button>
      </form>

      <List
        handleCompleted={handleCompleted}
        handleDelete={handleDelete}
        tasks={tasks}
        completedTasks={completedTasks}
      />
    </div>
    </>
  );
}
export default App;