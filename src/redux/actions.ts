import * as types from './types'

export interface CounterAction {
  type: String
  value?: number
}

export const increment = (value: number): CounterAction => ({
  type: types.INCREMENT,
  value,
})

export const decrement = (value: number): CounterAction => ({
  type: types.DECREMENT,
  value,
})

export const requestIncrementAsync = (): CounterAction => ({
  type: types.REQUEST_INCREMENT_ASYNC,
})
