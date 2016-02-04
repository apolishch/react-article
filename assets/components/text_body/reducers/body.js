'use strict'

import {
  RECEIVE_TEXT
} from '../actions'

const initialState = ''

export default (state = initialState, action) => {
  switch (action.state) {
    case RECEIVE_TEXT:
      return action.text
    default:
      return state
  }
}
