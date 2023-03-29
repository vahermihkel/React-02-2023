import React, { useEffect, useRef, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
// import productsFromFile from "../../data/products.json";
// import categoriesFromFile from "../../data/categories.json";
import config from "../../data/config.json";
 
function EditProduct() {
  const [products, setProducts] = useState([]);
  const { id } = useParams(); // edit-product/:id   App.js
                                              // 68186744  === "68186744"
  const product = products.find(element => element.id === Number(id)); // HTMLi defaultValue={product.id}
  const index = products.findIndex(element => element.id === Number(id)); // productsFromFile[index] = UUS_TOODE
  const [message, setMessage] = useState("");
  const idRef = useRef();
  const nameRef = useRef();
  const imageRef = useRef();
  const priceRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    fetch(config.categoriesDbUrl) // <--- url tuleb failist
      .then(res => res.json())
      .then(json => setCategories(json || []));

    fetch(config.productsDbUrl) // <--- url tuleb failist
      .then(res => res.json())
      .then(json => {
        setProducts(json || []); 
        setLoading(false);
      });
  }, []);
 
  const edit = () => {
    if(idRef.current.value === ""){
      setMessage("Can't edit product to empty id!");
    } else {
      setMessage("Product edited: " + nameRef.current.value + "!");
      // ["c", "f", "s", ""][4]
      products[index] = {
        "id":Number(idRef.current.value),
        "name":nameRef.current.value,
        "image":imageRef.current.value,
        "price":Number(priceRef.current.value),
        "category":categoryRef.current.value,
        "description":descriptionRef.current.value,
        "active":activeRef.current.checked 
      };
      
      fetch(config.productsDbUrl, {"method": "PUT", "body": JSON.stringify(products)})
        .then(res => res.json())
        .then(() => navigate("/admin/maintain-products"))
    }
 
  }

  const checkIdUniqueness = () => {
    const found = products.find(element => element.id === Number(idRef.current.value));
    if (found === undefined) { // findIndex --> kui ei leita -1         find --> kui ei leita undefined
      setMessage("");
    } else {
      setMessage("ID is not unique!");
    }

    // const found = productsFromFile.filter(element => element.id === Number(idRef.current.value));
    // if (found.length === 0) {
    //   setMessage("");
    // } else {
    //   setMessage("ID is not unique!");
    // }
  }

  if (isLoading === true) {
    return <div className="center"><Spinner /></div>
  }
  
  return (
    <div className="center">
      {product !== undefined && <div>
        {message} <br />
        <label>Product's id:</label> <br />
        <input onChange={checkIdUniqueness} ref={idRef} defaultValue={product.id} type="number"/> <br />
        <label>Product's name:</label> <br />
        <input ref={nameRef} defaultValue={product.name} type="text"/> <br />
        <label>Product's price:</label> <br />
        <input ref={priceRef} defaultValue={product.price} type="number"/> <br />
        <label>Product's image:</label> <br />
        <input ref={imageRef} defaultValue={product.image} type="text"/> <br />
        <label>Product's category:</label> <br />
        {/* <input ref={categoryRef} defaultValue={product.category} type="text"/> <br /> */}
        <select ref={categoryRef} defaultValue={product.category}>
          {categories.map(element => <option key={element.name}>{element.name}</option> )}
        </select> <br />
        <label>Product's description:</label> <br />
        <input ref={descriptionRef} defaultValue={product.description} type="text"/> <br />
        <label>Product's active:</label> <br />
        <input ref={activeRef} defaultChecked={product.active} type="checkbox"/> <br />
        <button disabled={message === "ID is not unique!"} onClick={edit}>Edit</button> <br />
      </div>}
      {product === undefined && <div>Product not found</div>}
    </div>
  )
}
 
export default EditProduct