import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false)

  // const [count, setCount] = useState(0)

  const appClass = setIsDarkMode ? "App dark" : "App light"

  function handleClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

