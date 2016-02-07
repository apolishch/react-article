import React, { Component, PropTypes } from 'react'

export default class extends Component {
  static propTypes = {
    editable: PropTypes.bool.isRequired,
    body: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        text: PropTypes.string
      }),
      PropTypes.arrayOf(PropTypes.string)
    ]).isRequired
  };

  renderTextArea (body) {
    return <textarea defaultValue={body}></textarea>
  }

  renderNonEditable (body) {
    return <div> {body} </div>
  }

  render () {
    if (this.props.editable) {
      return <span>{ this.renderTextArea(this.constructBody()) }</span>
    } else {
      return <span>{ this.renderNonEditable(this.constructBody()) }</span>
    }
  }
}
