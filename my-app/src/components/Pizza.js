import React, { useState } from "react";
import './Pizza.css'

function Pizza({name, id, picture, ingredients, price}) {
   /* const pizzaName = pizzaData.name
    const{name} = pizzaData /*destructing, ua. mint a felső*. megadhatjuk egyenként és a a sorredn is mindegy objektumnál*/
  
  const [isFavorite, setIsFavorite] = useState(false)

    return (
    <div className =
    {"Pizza" +(isFavorite ? ' fav' : '')}>
    <img onClick={() =>
      setIsFavorite(true)
    }
    src="https://as1.ftcdn.net/v2/jpg/01/09/84/42/1000_F_109844239_A7MdQSDf4y1H80cfvHZuSa0zKBkZ68S7.jpg" alt ="csillag" 
    className="favorite"/>
    <h1>{name} {isFavorite? 'Kedvenc': 'Fújjj'}</h1>
    <p>{id}</p>
    <h3>{ingredients}</h3>
    <h2>{price}EUR</h2>
    
    <hr/>
    </div>
  );
}

export default Pizza;