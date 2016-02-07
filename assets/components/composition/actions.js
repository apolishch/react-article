'use strict'

import { resolve } from 'url'
import config from '../../../config'
import request from 'http-as-promised'
import Immutable from 'immutable'

const defaultOptions = Immutable.Map({
  method: 'GET',
  json: true,
  resolve: 'body'
})

const makeRequest = (options) => {
  return request(defaultOptions.merge(options).toJS())
}

export const RECEIVE_BODY = 'RECEIVE_BODY'
export function receiveBody (body) {
  return (dispatch) => {
    dispatch({
      type: RECEIVE_BODY,
      body
    })
  }
}

export function fetchBody () {
  return (dispatch) => {
    return makeRequest({
      url: resolve(config.apiUri, 'api/multiTabText')
    })
    .then(response => dispatch(receiveBody(response)))
  }
}

export const SELECT_TAB = 'SELECT_TAB'
export function tabSelected (tabKey) {
  return (dispatch) => {
    dispatch({
      type: SELECT_TAB,
      tabKey
    })
  }
}

export function selectTab (tab) {
  return (dispatch) => {
    dispatch(tabSelected(tab))
  }
}
