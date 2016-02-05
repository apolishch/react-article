'use strict'

import React, { Component, PropTypes } from 'react'
import Navigation from '../navigation'

export default class extends Component {
  static displayName = 'Container';
  static propTypes = {
    children: PropTypes.node
  };
  render () {
    return (
      <div className='container'>
        <Navigation />
        <div id='content' className='content'>
          {this.props.children}
        </div>
      </div>
    )
  }
}
