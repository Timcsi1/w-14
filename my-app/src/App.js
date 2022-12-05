import React from 'react';
import { useState } from 'react';
import './App.css';
import Pizzas from './components/Pizzas';
import Cart from './components/Cart'
// import Beers from './components/Beers';
// import Button from './components/Button';
// import Helo from './components/Helo';
// import beersData from './data/data';

function App() {

  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Button/>
      <Beers data = {beersData.cards} /> */}
      <Cart count={count}/>
      <Pizzas setCount={setCount}/>
    </div>
  );
}

export default App;

