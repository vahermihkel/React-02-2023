import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import cartFromFile from "../../data/cart.json";
import Button from '@mui/material/Button';

function Cart() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  
  const deleteItem = (index) => {
    cart.splice(index, 1);
    setCart(cart.slice()); // uuendab HTMLi
    localStorage.setItem("cart", JSON.stringify(cart)); // uuendab localStorage-t
  }

  const add = (clickedProduct) => {
    cart.push(clickedProduct);
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart)); 
    // localStorage.setItem("cart", "cart");  <---- ei saa
  }

  const empty = () => {
    // cartFromFile = [];
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([])); 
    // localStorage.setItem("cart", "[]");  <---- nii saab ka
  }

  const calculateTotal = () => {
    let total = 0; // const tüüpi muutujaid rohkem muuta ei saa. let tüüpi muutujaid saan lõpmatuseni muuta
    cart.forEach(oneProduct => total = total + oneProduct.price);
    return total.toFixed(2); //väljastan kogusumma HTMLi
  }

  return (
    <div>
      {cart.length > 0 && <Button variant="outlined" onClick={empty}>Empty</Button>}
      {cart.length === 0 && <div>Cart is empty. <Link to="/">Add products</Link></div>}
      {cart.length > 0 && <div>Cart contains {cart.length} items</div>}
      <div>
        {cart.map((element, index) => 
        <div key={index}> 
          <img className="picture" src={element.image} alt="" />
          <div>{element.name}</div>
          <div>{element.price} €</div>
          <button onClick={() => deleteItem(index)}>x</button> 
          <button onClick={() => add(element)}>+</button>
        </div>)}
      </div>
          {cart.length > 0 && <div>Total price: {calculateTotal()} €</div>}
    </div>
  )
}

export default Cart