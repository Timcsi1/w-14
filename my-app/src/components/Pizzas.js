import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import Pizza from './Pizza'

function Pizzas({setCount}) {
    const [pizzas, setPizzas]=useState([])
    const [filter, setFilter] =useState("")
    
    useEffect(function(){
        fetch (`http://127.0.0.1:2022`)
            .then(function(response){
return response.json();
            })
            .then(function(data){
        setPizzas(data)
            })
    })
  }

  return (
    <div>
      <input type="text" name="filter" id="filter"
      onChange={(event)=>{
        setFilter(event.target.value);
      }}/>
        pizzas
        .filter((pizza) => pizza.name.toLowerCase().includes(filter.toLowerCase()))
        .map(pizza => 
        <Pizza 
        name={pizza.name} key={pizza.id } price={pizza.price}  id={pizza.id} ingredients={pizza.ingredients} picture={pizza.picture} setCount={setCount}/>
        )
    </div>
  )

        
export default Pizzas;