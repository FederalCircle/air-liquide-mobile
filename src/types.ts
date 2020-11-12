export interface ToDoItem {
  name: string
}

// Redux

export interface ReduxState {
  toDoItems: ToDoItem[]
}

export interface ReduxAction {
  type: string
}
