'use strict'

import {
  RECEIVE_BODY
} from '../actions'
import { Map as iMap } from 'immutable'

const initialState = iMap({})

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_BODY:
      return iMap(action.body)
    default:
      return state
  }
}
