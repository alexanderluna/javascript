import { Component } from 'react'
import MembersList from './MembersList'

class Memeber extends Component {
  render() {
    const { name, picture, admin } = this.props
    return(
      <div>
        <h3>{ name } | { (name) ? 'ADMIN' : null }</h3>
        <img src={ picture }></img>
      </div>
    )
  }
}

export default Memeber
