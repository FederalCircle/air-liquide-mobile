import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchToDoItems } from '../redux/actions'
import { ReduxState } from '../types'

const useToDo = () => {
  const dispatch = useDispatch()
  const toDoItems = useSelector((state: ReduxState) => state.toDoItems)

  useEffect(() => {
    dispatch(fetchToDoItems())
  }, [])

  return {
    toDoItems,
  }
}

export default useToDo
