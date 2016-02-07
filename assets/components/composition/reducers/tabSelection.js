'use strict'

import {
  SELECT_TAB
} from '../actions'

const initialState = null

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_TAB:
      return action.tabKey
    default:
      return state
  }
}
