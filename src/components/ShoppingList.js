import React from "react";
import Item from "./Item";
import { useState } from "react";


function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All")

  function handleChange(event) {
    setSelectedCategory(event.target.value)
  }

  const itemsToDisplay = items.filter((item) => {
    return selectedCategory === "All" ? true : item.category === selectedCategory
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;






// const [foods, setFoods] = useState(spicyFoods);
// const [filterBy, setFilterBy] = useState("All");

// const foodsToDisplay = foods.filter((food) => {
//   if (filterBy === "All") {
//     return true;
//   } else {
//     return food.cuisine === filterBy;
//   }
// });


