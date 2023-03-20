import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import productsFromFile from "../../data/products.json";

function MaintainProducts() {
  const [products, setProducts] = useState(productsFromFile);
  const searchRef = useRef();

  const deleteProduct = (i) => {
    productsFromFile.splice(i,1);
    setProducts(productsFromFile.slice());
  }

  const searchFromProducts = () => {                      // pood .includes("is")
    const filteredProducts = productsFromFile.filter(element => 
      element.name.toLowerCase().includes(searchRef.current.value.toLowerCase()));
    setProducts(filteredProducts);
  }

  return (
    <div>
      <input onChange={searchFromProducts} ref={searchRef} type="text" />
      <div>{products.length} pcs</div>
      {products.map((element, index) => 
        <div>
          <img src={element.image} alt="" />
          <div>{element.id}</div>
          <div>{element.name}</div>
          <div>{element.image}</div>
          <div>{element.price}</div>
          <div>{element.category}</div>
          <div>{element.description}</div>
          <div>{element.active}</div>
          <button onClick={() => deleteProduct(index)}>Delete</button>
          <Link to={"/admin/edit-product/" + element.id}><button>Edit</button></Link>
        </div>
        )}
    </div>
  )
}

export default MaintainProducts