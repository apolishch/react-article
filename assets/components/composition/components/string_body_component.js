import { PropTypes } from 'react'
import MasterTabContentComponent from './master_tab_content'

export default class extends MasterTabContentComponent {
  static propTypes = {
    body: PropTypes.string.isRequired
  };

  constructBody () {
    return this.props.body
  }
}
