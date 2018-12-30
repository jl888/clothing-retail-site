import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { miniCartAddItem } from '../actions/mini_cart'

class ProductDetails extends Component {
  constructor (props) {
    super(props)
    this.state = {
      sizeSelected: null
    }
    this.onClickSizeSelect = this.onClickSizeSelect.bind(this)
    this.onClickAddItemToCart = this.onClickAddItemToCart.bind(this)
  }

  onClickSizeSelect (e) {
    let sizeSelected = null

    if (this.state.sizeSelected && this.state.sizeSelected !== e.currentTarget.getAttribute('data-size')) {
      sizeSelected = e.currentTarget.getAttribute('data-size')
    } else if (!this.state.sizeSelected ) {
      sizeSelected = e.currentTarget.getAttribute('data-size')
    }

    this.setState({ sizeSelected })
  }

  onClickAddItemToCart (e) {
    if (this.state.sizeSelected) {
      this.setState({ sizeSelected: null })
      this.props.miniCartAddItem({
        product: 'classic-tee',
        name: 'Classic Tee',
        price: 75,
        size: this.state.sizeSelected,
        image: this.props.image 
      })
    }
  }

  render () {
    return (
      <div className='product-details col-md-6'>
        <div className='product-title dark-text'>Classic Tee</div>
        <hr className='product-dividers' />
        <div className='product-price dark-text'>$75.00</div>
        <hr className='product-dividers' />
        <p className='product-description light-text'>
          Our men's tees are 180 GSM and 100% super soft combed cotton. They are pre-shrunk to minimise shrinkage, lightweight and side-seamed for that tailored cut. So are sure to fit you perfectly.
        </p>
        <div className='product-sizes'>
          <div className='product-size-title light-text'>
            SIZE<span className='required-star'>*</span>
            <div className='product-size-selected-text dark-text'>
              { this.state.sizeSelected ? this.state.sizeSelected : '' }
            </div>
          </div>
          <div className='product-size-tiles'>
            <div
              className='product-size-tile light-text'
              data-size='S' onClick={this.onClickSizeSelect}
              style={this.state.sizeSelected === 'S' ? {color: '#222222', border: '2px solid #222222'} : null}
            >
              S
            </div>
            <div
              className='product-size-tile light-text'
              data-size='M' onClick={this.onClickSizeSelect}
              style={this.state.sizeSelected === 'M' ? {color: '#222222', border: '2px solid #222222'} : null}
            >
              M
            </div>
            <div
              className='product-size-tile light-text'
              data-size='L' onClick={this.onClickSizeSelect}
              style={this.state.sizeSelected === 'L' ? {color: '#222222', border: '2px solid #222222'} : null}
            >
              L
            </div>
          </div>
        </div>
        <div className='add-to-cart-button' onClick={this.onClickAddItemToCart}>ADD TO CART</div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    miniCart: state.miniCart
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ miniCartAddItem: miniCartAddItem }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)
