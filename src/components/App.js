import React, { Component } from 'react'

import Header from '../containers/Header'
import ProductWrapper from '../containers/ProductWrapper'
import ProductImage from '../containers/ProductImage'
import ProductDetails from '../containers/ProductDetails'

import '../style/style.css'

const classicTeeImage = '/assets/images/classic-tee.jpg'

export default class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <ProductWrapper>
          <ProductImage image={classicTeeImage} />
          <ProductDetails image={classicTeeImage} />
        </ProductWrapper>
      </div>
    )
  }
}
