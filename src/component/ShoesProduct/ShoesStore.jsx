import React, { Component } from 'react'
import ProductList from './ProductList'

export default class ShoesStore extends Component {
  render() {
    return (
      <div>
        <h1 className='text-center fs-1 py-2'>Shoes Shop</h1>
        <div className='d-flex justify-content-end '>
            <span className='text-danger py-3' style={{cursor: 'pointer'}}>Giỏ hàng (0)</span>
            
        </div>
        <ProductList></ProductList>
      </div>
    )
  }
}
