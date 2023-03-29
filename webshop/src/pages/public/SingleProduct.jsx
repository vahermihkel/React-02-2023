import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import config from "../../data/config.json";
// import productsFromFile from "../../data/products.json";

function SingleProduct() {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { id } = useParams(); // id järgi
  //const found = productsFromFile[id]; // failist järjekorranumbriga
  const found = products.find(element => element.id === Number(id));
  // useParams()
  // .find()

  useEffect(() => {
    fetch(config.productsDbUrl) // <--- url tuleb failist
      .then(res => res.json())
      .then(json => {
        setProducts(json || []); 
        setLoading(false);
      });
  }, []);

  if (isLoading === true) {
    return <div className="center"><Spinner /></div>
  }

  return (
    <div>
      {found === undefined && <div>Toodet ei leitud!</div>}
      {found !== undefined && 
        <div>
          <div>{found.name}</div>
          <div>{found.price} €</div>
          <img src={found.image} alt="" />
          <div>{found.category}</div>
          <div>{found.price}</div>
          <div>{found.description}</div>
          <div>{found.active}</div>
        </div>}
    </div>
  )
}

export default SingleProduct