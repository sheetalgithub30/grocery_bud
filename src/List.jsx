function List({ tasks, completedTasks, handleDelete, handleCompleted }) {
  return (
    <ul>
      {tasks.map((task, index) => {
        return (
          <li
            key={index}
            style={
              completedTasks.includes(task.id)
                ? { textDecoration: "line-through" }
                : { textDecoration: "none" }
            }
          >
            {task.task}
            <button onClick={() => handleDelete(task.id)}>Delete</button>
            <button onClick={() => handleCompleted(task.id)}>Check</button>
          </li>
        );
      })}
    </ul>
  );
}
export default List;
