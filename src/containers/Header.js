import React, { Component } from 'react'
import { connect } from 'react-redux'

import '../style/style.css'

class Header extends Component {
  countCartItems (items) {
    return items.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.quantity
    }, 0)
  }

  render () {
    return (
      <div className='header'>
        <div className='my-cart main-display light-text'>
          <div className='dropdown'>
            <button className='dropdown-button'>
              <span className='glyphicon glyphicon-shopping-cart' aria-hidden='true'/>
              <div className="desktop-my-cart-text">My Cart ( { this.countCartItems(this.props.miniCart.items) } )</div>
              <div className="mobile-my-cart-text">( { this.countCartItems(this.props.miniCart.items) } )</div>
            </button>
            <div className='dropdown-content'>
              <span className='dropdown-content-top-border' />
              { this.props.miniCart.items.map(item => {
                  return (
                    <div key={`${item.product}-${item.size}`} className='dropdown-content-item'>
                      <img className='dropdown-content-item-img' src={item.image} alt='Classic Tee' height='120' />
                      <div className='dropdown-content-item-text dark-text'>
                        { item.name }<br />
                        { item.quantity }x <span className='product-price'>${ item.price }</span><br />
                        Size: { item.size }
                      </div>
                    </div>
                  )
                })
              }
              {
                this.props.miniCart.items.length < 1 &&
                <div className='dropdown-content-item'>
                  <div className='dropdown-content-item-text empty-cart-text dark-text'>
                    Your cart is currently empty.
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    miniCart: state.miniCart
  }
}

export default connect(mapStateToProps)(Header)
