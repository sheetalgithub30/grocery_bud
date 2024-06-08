import { useEffect, useState } from "react";
import List from "./List";

function App() {

  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);


  useEffect(()=>{
    if(localStorage.getItem("tasks")){
     let arr = JSON.parse(localStorage.getItem("tasks"));
     setTasks(arr);
    }
    // if(localStorage.getItem("completed")){
    //   let arr = JSON.parse(localStorage.getItem("completed"));
    //   setCompletedTasks(arr);
    //  }
  },[])

  
  useEffect(() => {
    if (tasks.length > 0)
      localStorage.setItem("tasks", JSON.stringify(tasks));
    // localStorage.setItem("completed",JSON.stringify(completedTasks));
  }, [tasks]);

  function handleSubmit(e) {
    e.preventDefault();
      const obj = {};
      obj.task = inputValue;
      obj.id = Date.now();
      setTasks([...tasks, obj]); 
      setInputValue("");
  }

  function handleDelete(idToDelete) {
    setTasks(
      tasks.filter((task) => {
        return task.id !== idToDelete;
      })
    );
  }


  function handleCompleted(idToMarkComplete) {
    setCompletedTasks([...completedTasks, idToMarkComplete]);
  }

  

  return (
    <>
      <h1>Todo List</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">
          Add Task
        </button>
      </form>

      <List
        handleCompleted={handleCompleted}
        handleDelete={handleDelete}
        tasks={tasks}
        completedTasks={completedTasks}
      />
    </>
  );
}
export default App;