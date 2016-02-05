'use strict'

import React, { Component } from 'react'
import { Link } from 'react-router'

export default class extends Component {
  static displayName = 'Navigation';

  render () {
    return (
      <ul>
        <li>
          <Link to='/textBody'>Text Body Demo</Link>
        </li>
        <li>
          <Link to='/composition'>Composition Example</Link>
        </li>
      </ul>
    )
  }
}
