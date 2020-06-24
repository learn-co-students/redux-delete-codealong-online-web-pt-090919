import uuid from 'uuid';
// set up id for todo to prevent error when tehre are multiple todos with the same text
// every todo that matches `action.payload` will be filtered out

export default function manageTodo(state = {
  todos: [],
}, action) {
  console.log(action)
  switch (action.type) {
    case 'ADD_TODO':
      const todo = {
        id: uuid(),
        text: action.payload.text
      }
      return { todos: state.todos.concat(todo) };

    case 'DELETE_TODO':
      // reducer update the state by filtering out the Todo to be deleted
      return { todos: state.todos.filter(todo => todo.id !== action.payload) }

    default:
      return state;
  }
}
