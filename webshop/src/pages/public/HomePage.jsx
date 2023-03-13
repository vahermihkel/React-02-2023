import React, { useState } from 'react'
import productsFromFile from "../../data/products.json";

function HomePage() {
  const [products, setProducts] = useState(productsFromFile);

  // KODUS: Toote lisamine ostukorvi
  // 1. ostukorv.json faili tekitamine data kausta
  // 2. faili sisse kirjutamine tühi array []
  // 3. siin homepages juurde lisamine
  // 4. ostukorvis kuvamine
  // 5. ostukorvis lisamine
  // 6. ostukorvis kustutamine
  // 7. ostukorvi kogusumma kokkuliitmine
  // 8. ostukorvis kogu toodete arvu ütlemine
  // 9. kui ostukorv on tühi, siis selle ütlemine
  // 10. kui ostkorv on tühi, siis kogusumma mittenäitamine

  // KODUS:
  // tõlke panemine mõnda kodusesse projekti: uudised
  // bootstrap panemine mõnda kodusesse projekti: uudised
  // lisage kolmas/neljas keel

  return (
    <div>
      {products.map(element => 
        <div>
          <img src={element.image} alt="" />
          <div>{element.id}</div>
          <div>{element.name}</div>
          <div>{element.image}</div>
          <div>{element.price}</div>
          <div>{element.category}</div>
          <div>{element.description}</div>
          <div>{element.active}</div>
          <button>Add to cart</button>
        </div>
        )}
    </div>
  )
}

export default HomePage