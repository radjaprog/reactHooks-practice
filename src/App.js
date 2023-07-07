import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";

// function countInitial() {
//   console.log("run function");
//   return 4;
// }

function App() {
  const [count, setCount] = useState(4);
  const [theme, setTheme] = useState("blue");

  // const [count, setCount] = useState({ count: 4, theme: 'blue' })
  //const [state, setState] = useState({ count: 4, theme: "blue" });
  //const theme = state.theme;

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
    // setState((prevState) => {
    // return { ...prevState, count: prevState.count - 1 };
    // });
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
    setTheme("red");
  }
  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;
