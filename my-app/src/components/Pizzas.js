import React from 'react'
import {pizzas } from '../data/pizza_data'
import Pizza from './Pizza'

function Pizzas() {
  return (
    <div>
        {pizzas.map(pizza => <Pizza name={pizza.name} key={pizza.id } price={pizza.price}  id={pizza.id} ingredients={pizza.ingredients}/>
        )}
    </div>
  )
}

export default Pizzas;