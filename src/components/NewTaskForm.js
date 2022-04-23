import React from "react";

function NewTaskForm({Categories,handelName,handelCategory,handleSubmit}) {
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handelName} />
      </label>
      <label>
        Category
        
        <select name="category" onChange={handelCategory} >
          {/* render <option> elements for each category here */}
          {Categories.slice(1).map((category) =>
  <option key={category.id} >
    {category}
  </option>
   
  )}
  
  
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
