import React from 'react'
import Button from '@mui/material/Button';

function SortButtons({ products, setProducts }) {

  const sortAZ = () => {
    products.sort((a, b) => a.name.localeCompare(b.name));
    setProducts(products.slice());
  }

  const sortZA = () => {
    products.sort((a, b) => b.name.localeCompare(a.name));
    setProducts(products.slice());
  }

  const sortPriceAsc = () => {
    products.sort((a, b) => a.price - b.price);
    setProducts(products.slice());
  }

  const sortPriceDesc = () => {
    products.sort((a, b) => b.price - a.price);
    setProducts(products.slice());
  }

  return (
    <div>
      <Button onClick={sortAZ}>Sort A-Z</Button>
      <Button onClick={sortPriceAsc}>Sort Price Asc</Button>
      <br />
      <Button onClick={sortZA}>Sort Z-A</Button>
      <Button onClick={sortPriceDesc}>Sort Price Desc</Button>
      <br />
    </div>
  )
}

export default SortButtons