import { Component } from 'react'
import Member from './Member'

class MembersList extends Component {

  render() {
    const { members } = this.props
    return(
      <div>
        <h2>Site Memebers</h2>
        <hr/>
        { members.map((member, i) =>
          <Member key={i}
                  name={member.name.first}
                  picture={member.picture.thumbnail}
        />)}
      </div>
    )
  }
}

export default MembersList
