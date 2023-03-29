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

  const pay = () => {
    const url = "https://igw-demo.every-pay.com/api/v4/payments/oneoff";
    const bodyData = {
      "api_username": "e36eb40f5ec87fa2",
      "account_name": "EUR3D1",
      "amount": calculateTotal(),
      "order_reference": Math.random() * 9999999,
      "nonce": "a9b7mkme73" + new Date() + Math.random() * 9999999,
      "timestamp": new Date(),
      "customer_url": "https://webshop022023.web.app"   // firebase.json failist
    }
    const headersData = {
      "Content-Type": "application/json",
      "Authorization": "Basic ZTM2ZWI0MGY1ZWM4N2ZhMjo3YjkxYTNiOWUxYjc0NTI0YzJlOWZjMjgyZjhhYzhjZA=="
    }

    fetch(url, {"method": "POST", "body": JSON.stringify(bodyData), "headers": headersData})
      .then(res => res.json())
      .then(json => {
        if (json.payment_link !== undefined) {
          empty();
        }
        window.location.href = json.payment_link
      }); 
      // vastusest (201 ehk edukas) realt 11, mis on makse link
  }

  // Veebipood / Visiitkaart
  // 1.a
  // Woocommerce (Wordpress), Magento, Prestashop, Joomla, Drupal
  // 1-2 nädalat valmis 2000-2500

  // spetsiaalsed lahendus 50 000
  // Kodulaenu pakkumised ühest kohast

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
      {cart.length > 0 && 
        <div className="cart-bottom">
            <div>Total price: {calculateTotal()} €</div>
            <select>
                { parcelMachines.filter(pm => pm.A0_NAME === "EE").map(pm => <option key={pm.NAME}>{pm.NAME}</option>)}
            </select>
            <Button variant='contained' onClick={pay}>Pay</Button>
        </div>}
    </div>
  )
}

export default Cart