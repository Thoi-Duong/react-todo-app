
import {
  NEW_LIST,
  NEW_TODO
} from './constant';

const initSate = {
  todos: [
    {
      name: 'The Voices of DOTA 2',
      note: 'Doing some random impressions of a massive bunch of characters from DOTA 2',
      list: [
        {name: 'There will be pain, there will be screaming.', status: 'doing'}
      ]
    }
  ]
}

export default function(state = initSate, action) {
  switch (action.type) {
    case NEW_LIST:
      return {...state, todos: action.data}
    case NEW_TODO:
      let { todos } = state;
      todos = todos.map(todo => {
        if (todo.name === action.data.name){
          let { list } = todo
          list.push(action.data.item)
          return {...todo, list};
        } 
        return todo
      });
      return {...state, todos}
    default:
      return state;
  }
}
