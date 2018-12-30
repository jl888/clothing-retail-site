import React, { Component } from 'react'

class ProductImage extends Component {
  render () {
    return (
      <div className='product-image-wrapper col-md-6'>
        <img className='product-image' src={this.props.image} alt='Classic Tee' />
      </div>
    )
  }
}

export default ProductImage
