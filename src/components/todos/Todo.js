import React from 'react'

const Todo = props => {
  console.log(props)
  return (
    <div>
      {/* button clicked -> value of props.text is passed into dispatched action as payload */}
      <span>{props.todo.text}</span><button onClick={() => props.delete(props.todo.id)}>DELETE</button>
    </div>
  )
}

export default Todo;