export interface ToDoItem {
  name: string
  checked: boolean
}

// Redux

export interface ReduxState {
  toDoItems: ToDoItem[]
}

export interface ReduxAction {
  type: string
}
