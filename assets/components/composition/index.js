'use strict'

import React, { Component } from 'react'
import store from './store'
import reducer from'./reducers'
import { fetchBody } from './actions'

export default class extends Component {
  static displayName = 'Composition Example';
  constructor (props) {
    super(props)
    this.state = {
      store: store(reducer())
    }
  }

  componentDidMount () {
    const { store: { dispatch } } = this.state
    dispatch(fetchBody()).then(() => this.setState({
      tabs: this.state.store.getState().tabContent
    }))

    this.subscriber = this.state.store.subscribe((state) => {
      this.setState({
        tabs: this.state.store.getState().tabContent
      })
    })
  }

  componentWillUnmount () {
    this.subscriber()
  }

  render () {
    const { tabs } = this.state
    return (
      <div className='body-text'>
        { tabs }
      </div>
    )
  }
}