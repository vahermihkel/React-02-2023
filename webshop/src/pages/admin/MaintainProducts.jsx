import React, { useEffect, useRef, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import config from "../../data/config.json";
// import productsFromFile from "../../data/products.json";

function MaintainProducts() {
  // const [products, setProducts] = useState(productsFromFile);
  const searchRef = useRef();
  const [dbProducts, setDbProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(config.productsDbUrl) // <--- url tuleb failist
      .then(res => res.json())
      .then(json => {
        setProducts(json || []);  // kui sealt tuleb tagastus "null" ehk tühjus
        setDbProducts(json || []);
        setLoading(false);
      });
  }, []);

  const deleteProduct = (productClicked) => {
    const i = dbProducts.findIndex(prod => prod.id === productClicked.id);
    dbProducts.splice(i,1);
    
    fetch(config.productsDbUrl, {"method": "PUT", "body": JSON.stringify(dbProducts)})
        .then(res => res.json())
        .then(() => searchFromProducts())
  }

  const searchFromProducts = () => {                      // pood .includes("is")
    const filteredProducts = dbProducts.filter(element => 
      element.name.toLowerCase().includes(searchRef.current.value.toLowerCase()) ||
      element.description.toLowerCase().includes(searchRef.current.value.toLowerCase()) ||
      element.id.toString().includes(searchRef.current.value.toLowerCase())
      );
    setProducts(filteredProducts);
  }

  if (isLoading === true) {
    return <div className="center"><Spinner /></div>
  }

  return (
    <div>
      <input onChange={searchFromProducts} ref={searchRef} type="text" />
      <div>{products.length} pcs</div>
      {products.map((element, index) => 
        <div key={index} className={ element.active ? "active" : "inactive" }>
          <img src={element.image} alt="" />
          <div>{element.id}</div>
          <div>{element.name}</div>
          <div>{element.image}</div>
          <div>{element.price}</div>
          <div>{element.category}</div>
          <div>{element.description}</div>
          <div>{element.active}</div>
          <button onClick={() => deleteProduct(element)}>Delete</button>
          <Link to={"/admin/edit-product/" + element.id}><button>Edit</button></Link>
        </div>
        )}
    </div>
  )
}

export default MaintainProducts