import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false)

  function handleAddCart() {
    setIsInCart ((isInCart) => !isInCart)
    // setIsDarkMode ((isDarkMode) => !isDarkMode)
  }
  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddCart} className={isInCart ? "add" : "remove"}>
        {isInCart ? "Remove from cart" : "Add to cart"} 
      </button>
    </li>
  );
}

export default Item;
