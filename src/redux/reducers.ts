import { combineReducers } from 'redux'
import * as types from './types'
import { CounterAction } from './actions'

const counterReducer = (state: number = 0, action: CounterAction): number => {
  switch (action.type) {
    case types.INCREMENT:
      return state + 1
    case types.DECREMENT:
      return state - 1
    default:
      return state
  }
}

const reducer = combineReducers({
  counter: counterReducer,
})

export default reducer
