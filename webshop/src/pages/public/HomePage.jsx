import React, { useEffect, useState } from 'react'
// import productsFromFile from "../../data/products.json";
// import categoriesFromFile from "../../data/categories.json"; // <- kustutan selle
import Button from '@mui/material/Button';
import config from "../../data/config.json";
import { Link } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

function HomePage() {
  const [dbProducts, setDbProducts] = useState([]); // veendun, et siin oleks ALATI andmebaasist (243 tk)
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(config.categoriesDbUrl) // <--- url tuleb failist
      .then(res => res.json())
      .then(json => setCategories(json || []));

    fetch(config.productsDbUrl) // <--- url tuleb failist
      .then(res => res.json())
      .then(json => {
        setProducts(json || []);  // kui sealt tuleb tagastus "null" ehk tühjus
        setDbProducts(json || []);
        setLoading(false);
      });
  }, []);

  // const lisaOstukorv = (klikitudToode) => {
  //   // const ostukorvLS = JSON.parse(localStorage.getItem("ostukorv")) || [];
  //   // ostukorvLS.push(klikitudToode);
  //   // localStorage.setItem("ostukorv", JSON.stringify(ostukorvLS));

  //   // let ostukorvLS = localStorage.getItem("ostukorv");
  //   // ostukorvLS = JSON.parse(ostukorvLS) || [];
  //   // ostukorvLS.push(klikitudToode);
  //   // ostukorvLS = JSON.stringify(ostukorvLS);
  //   // localStorage.setItem("ostukorv", ostukorvLS);
  // }

  const addToCart = (productClicked) => {
    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];     //   || ""
    const index = cartLS.findIndex(cartProduct => cartProduct.product.id === productClicked.id);
    if (index !== -1) {   // index >= 0
      // suurendan kogust ---> tegemist on MUUTMISEGA
      // muudetakse elemente indexi (järjekorranumbri) alusel
      cartLS[index].quantity = cartLS[index].quantity + 1;
    } else {
      // lisan lõppu kogusega 1
      cartLS.push({product: productClicked, quantity: 1});
    }
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
    //     peame võtma otse andmebaasist    productsFromFile <--- oli otseandmebaasist
          //       243 toodet
          //  243.filter(igaToode => igaToode.category === "camping")
          // 60 läheb resulti sisse ja tehakse:   setProducts(60 toodet)

          //       60 toodet                                        ----> kui oleks products
          // 60.filter(igaToode => igaToode.category === "jeans")   ----> kui oleks products
    const result = dbProducts.filter(element => element.category === categoryClicked);
    setProducts(result);
  }

  if (isLoading === true) {
    return <Spinner />
  }

  return (
    <div>
      {/* <button onClick={() => filterByCategory("camping")}>camping</button>
      <button onClick={() => filterByCategory("belts")}>belts</button> */}
      {categories.map(element => 
        <button key={element.name} onClick={() => filterByCategory(element.name)}>
          {element.name}
        </button>)}
      <div>{products.length} pcs</div>
      {/* KOJU: sorteeri nupud
      sortAZ
      sortZA
      sortPriceAsc
      sortPriceDesc
      */}
      {products.map(element => 
        <div key={element.id}>
          <Link to={"/product/" + element.id}>
            <img src={element.image} alt="" />
            <div>{element.id}</div>
            <div>{element.name}</div>
            <div>{element.image}</div>
            <div>{element.price}</div>
            <div>{element.category}</div>
            <div>{element.description}</div>
            <div>{element.active}</div>
          </Link>
          <Button variant="contained" onClick={() => addToCart(element)}>Add to cart</Button>
        </div>
        )}
    </div>
  )
}

export default HomePage