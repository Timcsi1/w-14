import React from 'react'

function Pizza({name, id, picture, ingredients, price}) {
   /* const pizzaName = pizzaData.name
    const{name} = pizzaData /*destructing, ua. mint a felső*. megadhatjuk egyenként és a a sorredn is mindegy objektumnál*/
  
  const [isFavourite, setIsFavourite] = useState(false)

    return (
    <div className =
    {"Pizza" +(isFavourite?' favour' : '')}>
    <h1>{name} {isFavourite? 'Kedvenc': 'Fújjj'}</h1>
    <p>{id}</p>
    <h3>{ingredients}</h3>
    <h2>{price}EUR</h2>
    <img onClick={() =>
      setIsFavourite(true)
    }
    src="https://as1.ftcdn.net/v2/jpg/01/09/84/42/1000_F_109844239_A7MdQSDf4y1H80cfvHZuSa0zKBkZ68S7.jpg" alt ="csillag"
    className="favourite"/>
    <hr/>
    </div>
  );
}

export default Pizza;