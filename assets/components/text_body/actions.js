'use strict'

import { resolve } from 'url'
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

export const RECEIVE_TEXT = 'RECEIVE_TEXT'
export function receiveText (text) {
  return (dispatch) => {
    dispatch({
      type: RECEIVE_TEXT,
      text
    })
  }
}

export function fetchText () {
  return (dispatch) => {
    return makeRequest({
      url: resolve('localhost:4000/', 'api/textBody')
    })
    .then(response => dispatch(receiveText(response.text)))
  }
}
