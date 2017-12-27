import { Component }  from 'react'
import PropTypes      from 'prop-types'
import '../css/custom.scss'

class SkiDayCount extends Component {

  // total: int
  // snow: int
  // hike: int
  // goal: int

  toPercentage(decimal) {
    return((decimal * 100) + "%")
  }

  goalProgress(total, goal) {
    return this.toPercentage(total/goal)
  }

  render() {
    return(
      <div>
        <aside className="col-md-3"></aside>
        <div className="col-md-6">
          <div className="ski-day-count">

            <div className="total-days">
              <span>{ this.props.total} days</span>
            </div>

            <div className="snow-days">
              <span>&#x2603; { this.props.snow} days</span>
            </div>

            <div className="hike-days">
              <span>{ this.props.hike} days</span>
            </div>

            <div className="goal">
              <span>{ this.goalProgress(this.props.total, this.props.goal) }</span>
            </div>

          </div>
        </div>
      </div>
    ) // return
  } // render
} // class

SkiDayCount.propTypes = {
  total: PropTypes.number,
  snow: PropTypes.number,
  hike: PropTypes.number,
  goal: PropTypes.number
}

SkiDayCount.defaultProps = {
  total: 20,
  snow: 5,
  hike: 1,
  goal: 10
}

export default SkiDayCount
