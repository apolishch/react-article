'use strict'

import React, { Component } from 'react'
import store from './store'
import reducer from'./reducers'
import { fetchText } from './actions'

export default class BasicTextDisplay extends Component {
  static displayName = 'BasicTextDisplay';
  constructor (props) {
    super(props)
    this.state = {
      store: store(reducer()),
      loaded: false
    }
  }

  componentDidMount () {
    const { store: { dispatch } } = this.state
    dispatch(fetchText()).then(() => this.setState({
      loaded: true,
      bodyText: this.state.store.getState().bodyText
    }))

    this.state.store.getState().subscribe(() => {
      this.setState({
        bodyText: this.state.store.getState().bodyText
      })
    })
  }

  render () {
    const { bodyText } = this.state
    return (
      <div className='body-text'>
        { bodyText }
      </div>
    )
  }
}
