import React from 'react'
import ProductsItems from './ProductsItems';
import Card from './Card';

function Products(props) {

    function renderProductsItems() {
        return props.items.map(item => (
          <ProductsItems
            title={item.title}
            date={item.date}
          />
        ));
      }
  return (
    <div>
    <Card>
        {renderProductsItems()}
    </Card>
    </div>
  )
}

export default Products;
