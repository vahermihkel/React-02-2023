import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import "../../css/Cart.css";
import { CartSumContext } from '../../store/CartSumContext';
import ParcelMachine from '../../components/cart/ParcelMachine';
import Payment from '../../components/cart/Payment';

function Cart() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const { setCartSum } = useContext(CartSumContext);

  const deleteItem = (index) => {
    cart.splice(index, 1);
    setCart(cart.slice()); 
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartSum(calculateTotal());
  }

  const decreaseQuantity = (index) => {
    cart[index].quantity = cart[index].quantity - 1;
    if (cart[index].quantity === 0) {
      deleteItem(index);
    }
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart)); 
    setCartSum(calculateTotal());
  }

  const increaseQuantity = (index) => {
    cart[index].quantity = cart[index].quantity + 1;
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart)); 
    setCartSum(calculateTotal());
  }

  const empty = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([])); 
    setCartSum("0.00");
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
        <div className="product-wrapper">
          <div className="product" key={index}> 
            <img className="image" src={element.product.image} alt="" />
            <div className="name">{element.product.name}</div>
            <div className="price">{element.product.price} €</div>
            <div className="quantity">
              <img className="button" onClick={() => decreaseQuantity(index)} src="/minus.png" alt="" />
              <div>{element.quantity}</div>
              <img className="button" onClick={() => increaseQuantity(index)} src="/plus.png" alt="" />
            </div>
            <div className="sum">{(element.product.price * element.quantity).toFixed(2)} €</div>
            <img className="button" onClick={() => deleteItem(index)} src="/delete.png" alt="" />
          </div>
          <div className="mobile-row">
            <img className="button" onClick={() => decreaseQuantity(index)} src="/minus.png" alt="" />
            <div>{element.quantity}</div>
            <img className="button" onClick={() => increaseQuantity(index)} src="/plus.png" alt="" />
          </div>
        </div> 
        )}
      </div>
      {cart.length > 0 && 
        <div className="cart-bottom">
            <div>Total price: {calculateTotal()} €</div>
            <ParcelMachine />
            <Payment sum={calculateTotal()} empty={empty} />
        </div>}
    </div>
  )
}

export default Cart