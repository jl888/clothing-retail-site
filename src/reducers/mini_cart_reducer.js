const initialState = {
  items: []
}

export default function shoppingCartReducer (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case 'MINI_CART_ADD_PRODUCT':
      const productExists = state.items.find(item => payload.product === item.product && payload.size === item.size)
      if (!productExists) {
        return {...state, items: [...state.items, {...payload, quantity: 1}]}
      }

      const products = state.items.map(item => {
        if (payload.product === item.product && payload.size === item.size) {
          item.quantity += 1
          return item
        }
        return item
      })
      return {...state, items: [...products]}
    default:
      return state
  }
}
