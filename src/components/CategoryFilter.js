import React, { useState } from "react";

function CategoryFilter({ categories, onCategoryChange }) {
  console.log(categories);

  const [selectedButton, setButton] = useState("");

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => (
        <button 
          key={category}
          value={category} 
          className={selectedButton === category ? "selected" : ""}
          onClick={(event) => {
            onCategoryChange(category);
            setButton(event.target.value);
          }} 
          >{category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
