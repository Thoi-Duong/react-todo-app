import {
  NEW_LIST,
  NEW_TODO
} from './constant';

function newList(data) {
  return {
    type: NEW_LIST,
    data
  }
}

function newTodo(data) {
  return {
    type: NEW_TODO,
    data
  }
}


export function addNewList(data) {
  return (dispatch, getState) => {
    const { home } = getState();
    let { todos } = home;
    todos.push({...data, list: []});
    dispatch(newList(todos));
  }
}

export function addNewTodo(data) {
  return (dispatch, getState) => {
    dispatch(newTodo(data));
  }
}
