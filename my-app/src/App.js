import React from "react";
import "./App.css";
import Pizzas from "./components/Pizzas";
import Cart from './components/Cart';
import { useState } from 'react';
/*import Beers from "./components/Beers";
import Button from "./components/Button";
import Hello from "./components/Hello"; 
import beersData from "./data/data";*/

function App() {
const [count, setCount] = useState(0)

  return (
    <div className="App">
      {
      /*<Button />
      <ButtonStateChange/>
      <Beers data={beersData.cards} />*/}
      <Cart count={count}/>
      <Pizzas setCount={setCount}/>
    </div>
  );
}

export default App;
