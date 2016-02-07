'use strict'

import React, { Component } from 'react'
import ArrayBodyComponent from './array_body_component'
import StringBodyComponent from './string_body_component'
import ObjectBodyComponent from './object_body_component'

export default class extends Component {
  static displayName = 'Body Router';
  static propTypes = {
    contents: (props) => {
      const { contents } = props
      if (!contents) {
        return new Error('Contents must be provided to the Tab Contents Router')
      }
      if (typeof (contents.editable) !== 'boolean') {
        return new Error('Contents must have an editable value of type boolean')
      }
      if (['string', 'object'].indexOf(typeof (contents.body)) === -1) {
        return new Error('Contents body must be either a string or a an object/array')
      }
    }
  };

  pickComponentType () {
    const { editable, body } = this.props.contents
    if (Array.isArray(body)) {
      return <ArrayBodyComponent body={body} editable={editable}/>
    } else if (typeof (body) === 'string') {
      return <StringBodyComponent body={body} editable={editable}/>
    } else {
      return <ObjectBodyComponent body={body} editable={editable}/>
    }
  }

  render () {
    return (<span>{ this.pickComponentType() }</span>)
  }
}
