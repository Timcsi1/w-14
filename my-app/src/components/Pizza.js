import React, { useState } from "react";
import { useEffect } from "react";
import './Pizza.css'

function Pizza({name, id, picture, ingredients, price, setCount}) {
   /* const pizzaName = pizzaData.name
    const{name} = pizzaData /*destructing, ua. mint a felső*. megadhatjuk egyenként és a a sorredn is mindegy objektumnál*/
  
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(function(){
     console.log(isFavorite);
  },[isFavorite])

    return (
    <div className =
    {"Pizza" +(isFavorite ? ' fav' : '')}>
    <img 
    onClick={() =>
      setIsFavorite(!isFavorite)}/>
    img src={
        isFavorite
        ? "https://www.iconpacks.net/icons/2/free-favourite-icon-2765-thumb.png"
        : "https://as1.ftcdn.net/v2/jpg/01/09/84/42/1000_F_109844239_A7MdQSDf4y1H80cfvHZuSa0zKBkZ6857.jpg" } 
        alt ="csillag" 
    className="favorite" onClick={()=>{
        setIsFavorite((oldValue)=> !oldValue)
        console.log(isFavorite)
    }}/>

    <h1>{name} {isFavorite? 'Kedvenc': 'Fújjj'}</h1>
    <p>{id}</p>
    <h3>{ingredients}</h3>
    <h2>{price}EUR</h2>
   
    <img src={"pictures/" + picture} alt="pizza_picture"/>
    <button onClick={()=>{
        setCount ((oldValue) => oldValue +1) 
    }}>Kosárba</button>  
    <hr/> 
    </div>
  );
}

export default Pizza;