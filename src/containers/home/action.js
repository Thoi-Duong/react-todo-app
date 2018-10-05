import {
  NEW_LIST
} from './constant';

function newList(data) {
  return {
    type: NEW_LIST,
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
