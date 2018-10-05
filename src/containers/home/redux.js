
import {
  NEW_LIST
} from './constant';

const initSate = {
  todos: [
    {
      name: 'Task laka',
      note: 'voice of dota',
      list: [
        {name: 'laka matagg', status: 'doing'}
      ]
    }
  ]
}

export default function(state = initSate, action) {
  switch (action.type) {
    case NEW_LIST:
      return {...state, todos: action.data}
    default:
      return state;
  }
}
