import React, { useState } from 'react'

function ProductForm(props) {

  const [newTitle ,setTitle] =useState('');
  const [newDate ,setDate] =useState('');

  function titleChangeHandler(event){
    setTitle(event.target.value);
    //console.log(event.target.value);
  }
  function dateChangeHandler(event){
     setDate(event.target.value);
    //console.log(event.target.value);
}

  function submitHandler(event){
    event.preventDefault();
    let productData ={
      title : newTitle,
      date: newDate
    };
    //console.log(productData);
    props.onSaveProduct(productData);
    setTitle('');
    setDate('')
  }


  return (<form onSubmit={submitHandler}>
    <div>
      <div className='new-product-title'>
        <label>Title</label>
        <input type='text' required value={newTitle} onChange={titleChangeHandler}></input>
      </div>
      <div className='new-product-date'>
        <label>Date</label>
        <input type='date'  required value={newDate} onChange={dateChangeHandler}></input>
      </div>
      <div className='new-product-button'>
        <button type='submit'>Add Product</button>
      </div>
    </div>
    </form>
  )
}

export default ProductForm
