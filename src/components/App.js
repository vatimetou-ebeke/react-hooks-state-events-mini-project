import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  const taskToDisplay = TASKS
  .filter((task) => {
    if (selectedCategory === "All") return true;
    return task.category === selectedCategory;
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter Categories={CATEGORIES} handleCategoryChange={handleCategoryChange} />
      <NewTaskForm />
      <TaskList Tasks={TASKS}  taskToDisplay={taskToDisplay}/>
    </div>
  );
}

export default App;
