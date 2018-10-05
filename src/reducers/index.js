import { combineReducers } from 'redux'
import {
  DEFAULT
} from './constant';

import home from '../containers/home/redux';

function root(state = {}, action) {
  switch (action.type) {
    case DEFAULT:
    default:
      return state
  }
}

const rootReducer = combineReducers({
  root,
  home
})

export default rootReducer
