import React from 'react'
import Button from '@mui/material/Button';

function FilterBar(props) {

  const filterByCategory = (categoryClicked) => {
    const result = props.dbProducts.filter(element => element.category === categoryClicked);
    props.setProducts(result);
  }

  return (
    <div>
      {props.categories.map(element => 
        <Button key={element.name} onClick={() => filterByCategory(element.name)}>
          {element.name}
        </Button>)}
    </div>
  )
}

export default FilterBar