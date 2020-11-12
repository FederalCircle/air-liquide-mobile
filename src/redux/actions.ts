import { ToDoItem } from '../types'
import * as types from './actionTypes'

export const updateToDoItems = (toDoItems: ToDoItem[]) => ({
  type: types.UPDATE_TO_DO_ITEMS,
  toDoItems,
})

export const fetchToDoItems = () => ({
  type: types.FETCH_TO_DO_ITEMS,
})
