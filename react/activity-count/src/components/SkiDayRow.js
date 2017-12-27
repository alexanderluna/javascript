import { Component } from 'react'
import PropTypes     from 'prop-types'

class SkiDayRow extends Component {
  // mountain: string, date: date obj, snow: bool, hike: bool
  render() {
    const { date, mountain, snow, hike } = this.props
    return(
      <tr>
        <td>{ date }</td>
        <td>{ mountain }</td>
        <td>{ (snow) ? <span>&#x2603;</span> : null }</td>
        <td>{ (hike) ? <span>HIKE!!!</span> : null }</td>
      </tr>
    ) // return
  } // render
} // class

SkiDayRow.propTypes = {
  date: PropTypes.string.isRequired,
  mountain: PropTypes.string.isRequired,
  snow: PropTypes.bool.isRequired,
  hike: PropTypes.bool.isRequired
}

export default SkiDayRow
