import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import "../../css/Cart.css";

function Cart() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [parcelMachines, setParcelMachines] = useState([]); // algväärtus, mis on senikaua kuni API päring teostub

  // uef 
  useEffect(() => { // kui lehele tulles, kohe tehakse API päring
    fetch("https://www.omniva.ee/locations.json") // VÕTAB ALATI AEGA 0.1s-1s   0.5s
      .then(res => res.json())
      .then(json => setParcelMachines(json));
  }, []);

  const deleteItem = (index) => {
    cart.splice(index, 1);
    setCart(cart.slice()); // uuendab HTMLi
    localStorage.setItem("cart", JSON.stringify(cart)); // uuendab localStorage-t
  }

  const decreaseQuantity = (index) => {
    cart[index].quantity = cart[index].quantity - 1;
    if (cart[index].quantity === 0) {
      deleteItem(index);
    }
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart)); 
  }

  const increaseQuantity = (index) => {
    cart[index].quantity = cart[index].quantity + 1;
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart)); 
  }

  const empty = () => {
    // cartFromFile = [];
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([])); 
    // localStorage.setItem("cart", "[]");  <---- nii saab ka
  }

  const calculateTotal = () => {
    let total = 0; // const tüüpi muutujaid rohkem muuta ei saa. let tüüpi muutujaid saan lõpmatuseni muuta
    cart.forEach(oneProduct => total = total + oneProduct.product.price * oneProduct.quantity);
    return total.toFixed(2); //väljastan kogusumma HTMLi
  }

  return (
    <div>
      <div className="cart-top">
        {cart.length > 0 && <Button variant="outlined" onClick={empty}>Empty</Button>}
        {cart.length === 0 && <div>Cart is empty. <Link to="/">Add products</Link></div>}
        {cart.length > 0 && <div>Cart contains {cart.length} items</div>}
      </div>
      <div>
        {cart.map((element, index) => 
        <div className="product" key={index}> 
          <img className="image" src={element.product.image} alt="" />
          <div className="name">{element.product.name}</div>
          <div className="price">{element.product.price} €</div>
          <div className="quantity">
            <img className="button" onClick={() => decreaseQuantity(index)} src="/minus.png" alt="" />
            {/* <button >-</button> */}
            <div>{element.quantity}</div>
            <img className="button" onClick={() => increaseQuantity(index)} src="/plus.png" alt="" />
            {/* <button >+</button> */}
          </div>
          <div className="sum">{(element.product.price * element.quantity).toFixed(2)} €</div>
          <img className="button" onClick={() => deleteItem(index)} src="/delete.png" alt="" />
          {/* <button >x</button>  */}
        </div>)}
      </div>
          <div className="cart-bottom">
            {cart.length > 0 && <div>Total price: {calculateTotal()} €</div>}
            <select>
                { parcelMachines.filter(pm => pm.A0_NAME === "EE").map(pm => <option key={pm.NAME}>{pm.NAME}</option>)}
            </select>
          </div>
    </div>
  )
}

export default Cart