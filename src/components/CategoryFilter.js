import React from "react";

function CategoryFilter({Categories,handleCategoryChange}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {Categories.map((category) =>
  <button key={category.id} onClick={handleCategoryChange}>
    {category}
  </button>
   
  )}
   </div>
  )
}

export default CategoryFilter;
