import { combineReducers } from 'redux'
import miniCartReducer from './mini_cart_reducer'

const rootReducer = combineReducers({
  miniCart: miniCartReducer
})

export default rootReducer
