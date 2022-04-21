import React from "react";

function TaskList({Tasks}) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
  {Tasks?.map((task) => (
          < div className="tasks"
           key={task.text} name={task.text} category={task.category}  />
        ))}
    </div>
  );
}

export default TaskList;
