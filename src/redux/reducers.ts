import { combineReducers } from 'redux'
import { ReduxAction, ToDoItem } from '../types'
import * as types from './actionTypes'

interface ToDoItemsAction extends ReduxAction {
  toDoItems: ToDoItem[]
}

const toDoItemsReducer = (
  state: ToDoItem[] = [],
  action: ToDoItemsAction
): ToDoItem[] => {
  switch (action.type) {
    case types.UPDATE_TO_DO_ITEMS:
      return action.toDoItems
    default:
      return state
  }
}

const reducer = combineReducers({
  toDoItems: toDoItemsReducer,
})

export default reducer
