import React,{useState} from "react";
import Task from "./Task"

function TaskList({tasks,deleteTask}) {
  


  //console.log(Tasks)

  
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
  {tasks.map((task) => (
          < Task className="tasks"
           key={task.text} category={task.category} text={task.text} deleteTask={deleteTask}  />
        ))}
    </div>
  );
}

export default TaskList;
