import React, { Component } from 'react'

class ProductWrapper extends Component {
  render () {
    const { children } = this.props

    return (
      <div className='main-display product-wrapper row'>
        { children }
      </div>
    )
  }
}

export default ProductWrapper
