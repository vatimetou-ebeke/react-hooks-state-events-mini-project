import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const[tasks , setTasks] = useState(TASKS)
  const [selectName, setSelectName] = useState("")
  const [selectTaskCategory, setSelectTaskCategory] = useState("Code")
  const [submittedTask, setSubmittedTask] = useState(tasks);

  //console.log(setSelectName)


  function handelCategory(event){
    setSelectTaskCategory(event.target.value);
  }

  function handleSubmit(event) {
    
    event.preventDefault();
    console.log(selectName);
    const newItem = {

      text: selectName,

      category:selectTaskCategory,
    };
    const dataArray = [...submittedTask, newItem];
    setSubmittedTask(dataArray);
   
  }





  function handleItemName(event) {
    console.log(event.target.value)
      setSelectName(event.target.value);
    }


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.innerText);
    console.log(event)
  }
 
  const taskToDisplay = submittedTask
  .filter((task) => {
    if (selectedCategory === "All") return true;
    return task.category === selectedCategory;
  })

  function deleteTask(e) {
    console.log(e.target.name)
    setSubmittedTask(submittedTask.filter(task => task.text !== e.target.name))
}


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter Categories={CATEGORIES} handleCategoryChange={handleCategoryChange} />
      <NewTaskForm Categories={CATEGORIES}  handelName={handleItemName} handleSubmit={ handleSubmit} handelCategory={handelCategory}/>
      <TaskList tasks={taskToDisplay} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
