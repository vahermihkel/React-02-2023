import React, { useState } from 'react'
import productsFromFile from "../../data/products.json";
import categoriesFromFile from "../../data/categories.json";
// import cartFromFile from "../../data/cart.json";
import Button from '@mui/material/Button';

function HomePage() {
  const [products, setProducts] = useState(productsFromFile);

  const addToCart = (element) => {
    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];     //   || ""
    cartLS.push(element);
    localStorage.setItem("cart", JSON.stringify(cartLS));
    //localStorage.getItem("võti"); // VÕTA VÄÄRTUS LOCALSTORAGE-st
    //localStorage.setItem("võti", "uus_väärtus"); // PANE VÄÄRTUS LOCALSTORAGE-sse

    // 1. võtame kogu vana ostukorvi seisu localStoragest
    // 2. tuleb võtta jutumärgid maha (siiamaani - keel, telefon, email, aadress, veebilehe_varv)
    // 3. lisame ostukorvi ühe toote juurde
    // 4. panna jutumärgid tagasi peale
    // 5. paneme kogu ostukorvi sisu tagasi localStoragesse
  }

  const filterByCategory = (categoryClicked) => {
    const result = productsFromFile.filter(element => element.category === categoryClicked);
    setProducts(result);
  }

  return (
    <div>
      {/* <button onClick={() => filterByCategory("camping")}>camping</button>
      <button onClick={() => filterByCategory("belts")}>belts</button> */}
      {categoriesFromFile.map(element => <button key={element} onClick={() => filterByCategory(element)}>{element}</button>)}
      <div>{products.length} pcs</div>
      {/* KOJU: sorteeri nupud
      sortAZ
      sortZA
      sortPriceAsc
      sortPriceDesc
      */}
      {products.map(element => 
        <div key={element.id}>
          <img src={element.image} alt="" />
          <div>{element.id}</div>
          <div>{element.name}</div>
          <div>{element.image}</div>
          <div>{element.price}</div>
          <div>{element.category}</div>
          <div>{element.description}</div>
          <div>{element.active}</div>
          <Button variant="contained" onClick={() => addToCart(element)}>Add to cart</Button>
        </div>
        )}
    </div>
  )
}

export default HomePage