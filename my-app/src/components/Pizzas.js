import React, { useEffect, useState } from 'react'
import Pizza from './Pizza'

function Pizzas({setCount}) {

  const [pizzas, setPizzas] = useState([])
  const [filter, setFilter] = useState("")

  useEffect(() => {
    fetch(`http://127.0.0.1:2022`)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      setPizzas(data)
    })
  }, [])

  return (
    <div>
      <input type="text" name="filter" id="filter" onChange={(event) => {
        setFilter(event.target.value)
      }}/>
      {pizzas
        .filter((pizza) => pizza.name.toLowerCase().includes(filter.toLowerCase()))
        .map((pizza) => <Pizza key={pizza.id} name={pizza.name} id = {pizza.id} ingredients = {pizza.ingredients} price = {pizza.price} picture = {pizza.picture} setCount={setCount}/>)}

    </div>
  )
}

export default Pizzas

      
