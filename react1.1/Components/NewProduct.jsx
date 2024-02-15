import React from 'react'
import ProductForm from './ProductForm'

function NewProduct(props) {
  function saveProduct(product){
    console.log('i am inside product');
    console.log(product);

    //calling parent function
    props.printProduct(product);

  }
  return (
    <div className='new-product'>
      <ProductForm onSaveProduct={saveProduct}/>
    </div>
  )
}

export default NewProduct
