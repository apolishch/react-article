'use strict'

import React, { Component } from 'react'
import store from './store'
import reducer from'./reducers'
import { fetchBody, selectTab } from './actions'
import TabContentsRouter from './components/tab_contents_router'

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
        tabs: this.state.store.getState().tabContent,
        tabKey: this.state.store.getState().tabKey
      })
    })
  }

  componentWillUnmount () {
    this.subscriber()
  }

  selectTab (key) {
    const { store: { dispatch } } = this.state
    dispatch(selectTab(key))
  }

  renderTabSelector () {
    if (this.state.tabs) {
      return this.state.tabs.keySeq().map((k) => {
        return <button onClick={this.selectTab.bind(this, k)} key={k}>{k}</button>
      })
    }
  }

  renderTabContents () {
    if (this.state.tabs && this.state.tabKey) {
      return <TabContentsRouter contents={this.state.tabs.get(this.state.tabKey)}/>
    }
  }

  render () {
    return (
      <span>
        { this.renderTabSelector() }
        <div className='body-text'>
          { this.renderTabContents() }
        </div>
      </span>
    )
  }
}
