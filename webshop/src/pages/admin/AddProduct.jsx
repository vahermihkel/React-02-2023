import React, { useEffect, useRef, useState } from 'react'
// import productsFromFile from "../../data/products.json"
// import categoriesFromFile from "../../data/categories.json";
import config from "../../data/config.json";
 
function AddProduct() {
 
  const [message, setMessage] = useState("Add new product!")
  const idRef = useRef();
  const nameRef = useRef();
  const imageRef = useRef();
  const priceRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(config.categoriesDbUrl) // <--- url tuleb failist
      .then(res => res.json())
      .then(json => setCategories(json || []));

    fetch(config.productsDbUrl) // <--- url tuleb failist
      .then(res => res.json())
      .then(json => setProducts(json || []));
  }, []);
 
  const add = () => {
    if(nameRef.current.value === ""){
      setMessage("Can't add product with empty name!")
    } else{
      products.push({
        "id":Number(idRef.current.value),
        "name":nameRef.current.value,
        "image":imageRef.current.value,
        "price":Number(priceRef.current.value),
        "category":categoryRef.current.value,
        "description":descriptionRef.current.value,
        "active":activeRef.current.checked 
      });
      // SIIA ANDMEBAASI SAATMINE
      fetch(config.productsDbUrl, {"method": "PUT", "body": JSON.stringify(products)})
        .then(res => res.json())
        .then(() => {
          setMessage("Product added: " + nameRef.current.value + "!");
          idRef.current.value = "";
          nameRef.current.value = "";
          imageRef.current.value = "";
          priceRef.current.value = "";
          descriptionRef.current.value = "";
          activeRef.current.checked = false;
        })
    }
 
  }

  const checkIdUniqueness = () => {
    const found = products.find(element => element.id === Number(idRef.current.value));
    if (found === undefined) {
      setMessage("");
    } else {
      setMessage("ID is not unique!");
    }
  }
  
  return (
    <div>
      {message} <br />
      <label>New product's id:</label> <br />
      <input onChange={checkIdUniqueness} ref={idRef} type="number"/> <br />
      <label>New product's name:</label> <br />
      <input ref={nameRef} type="text"/> <br />
      <label>New product's price:</label> <br />
      <input ref={priceRef} type="number"/> <br />
      <label>New product's image:</label> <br />
      <input ref={imageRef} type="text"/> <br />
      <label>New product's category:</label> <br />
      {/* <input ref={categoryRef} type="text"/> <br /> */}
      <select ref={categoryRef}>
        {categories.map(element => <option key={element.name}>{element.name}</option> )}
      </select> <br />
      <label>New product's description:</label> <br />
      <input ref={descriptionRef} type="text"/> <br />
      <label>New product's active:</label> <br />
      <input ref={activeRef} type="checkbox"/> <br />
      <button disabled={message === "ID is not unique!"} onClick={add}>Enter</button> <br />
    </div>
  )
}
 
export default AddProduct