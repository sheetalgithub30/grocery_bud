import { useState } from "react";
function List({ tasks, completedTasks, handleDelete, handleCompleted}) {
  return (
    <div id="list">
      {tasks.map((task, index) => {
        return (
          <div id="inner-list">
           <button onClick={() => handleCompleted(task.id)}>✅</button>
            <p
            key={index}
            style={
              completedTasks.includes(task.id)
                ? { textDecoration: "line-through" }
                : { textDecoration: "none" }
            }
            >{task.task.toUpperCase()}</p>
            <button onClick={() =>  handleDelete(task.id)}>🗑️</button>
          </div>
        );
      })}
    </div>
  );
}
export default List;
