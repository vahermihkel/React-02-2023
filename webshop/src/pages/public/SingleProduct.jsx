import React from 'react'
import { useParams } from 'react-router-dom';
import productsFromFile from "../../data/products.json";

function SingleProduct() {
  const { id } = useParams(); // id järgi
  //const found = productsFromFile[id]; // failist järjekorranumbriga
  const found = productsFromFile.find(element => element.id === Number(id));
  // useParams()
  // .find()

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