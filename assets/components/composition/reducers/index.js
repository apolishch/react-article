'use strict'

import { combineReducers } from 'redux'
import tabContent from './tab'
import tabKey from './tabSelection'

export default function () {
  return combineReducers({
    tabContent,
    tabKey
  })
}
