'use strict'

import React, { Component } from 'react'
import store from './store'
import reducer from'./reducers'
import { fetchText } from './actions'

export default class extends Component {
  static displayName = 'BasicTextDisplay';
  constructor (props) {
    super(props)
    this.state = {
      store: store(reducer())
    }
  }

  componentDidMount () {
    const { store: { dispatch } } = this.state
    dispatch(fetchText()).then(() => this.setState({
      bodyText: this.state.store.getState().bodyText
    }))

    this.subscriber = this.state.store.subscribe((state) => {
      this.setState({
        bodyText: this.state.store.getState().bodyText
      })
    })
  }

  componentWillUnmount () {
    this.subscriber()
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
