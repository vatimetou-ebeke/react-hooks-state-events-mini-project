import React,{useState} from "react";
import Task from "./Task"

function TaskList({Tasks, taskToDisplay}) {
  const [setDelete, setSelectDelete]=useState(taskToDisplay)


  //console.log(Tasks)

  function deleteTask(e) {
     console.log(e.target.name)
     const updatedTask = setDelete.filter(task => task.text !== e.target.name)
    setSelectDelete(updatedTask)
}

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
  {taskToDisplay.map((task) => (
          < Task className="tasks"
           key={task.text} category={task.category} text={task.text} deleteTask={deleteTask}  />
        ))}
    </div>
  );
}

export default TaskList;
