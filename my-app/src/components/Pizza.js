import React, { useState, useEffect } from 'react'
import './Pizza.css'

function Pizza({id, name, picture, ingredients, price, setCount}) {
  // const pizzaName = pizzaData.name
  // const {name} = pizzaData

  const [isFavourite, setIsFavourite] = useState(false)

  useEffect(function() {
    console.log(isFavourite)
  }, [isFavourite])

  return (
    <div className={"Pizza" + (isFavourite ? " fav" : "")}>
      <img src={isFavourite ? "https://as1.ftcdn.net/v2/jpg/01/09/84/42/1000_F_109844239_A7MdQSDf4y1H80cfvHZuSa0zKBkZ68S7.jpg" : "https://www.iconpacks.net/icons/2/free-favourite-icon-2765-thumb.png"} alt="csillag" className="favourite" onClick={() => {
        setIsFavourite((oldValue) => !oldValue)
        //setIsFavourite(!isFavourite)
      }
      } />
      <p>Sorszám: {id}</p>
      <h1>{name} {isFavourite ? "kedvenc" : "fúj"}</h1>
      <h3>Összetevők: {ingredients}</h3>
      <h2>{price} Ft</h2>
      <img src={"pictures/" + picture} alt="pizza" />
      <button onClick={() => {
        setCount((oldValue) => oldValue + 1)
      }}>Kosárba</button>
      <hr />
    </div>
  )
}

export default Pizza
