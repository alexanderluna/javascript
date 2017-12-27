import { Component }  from 'react'
import PropTypes      from 'prop-types'
import SkiDayRow      from './SkiDayRow'
import { Link }       from 'react-router'

class SkiDayList extends Component {
  // days, filter
  // SkiDayRow: mountain: string, date: date, snow: bool, hike: bool

  render() {
    const { filter, days } = this.props
    const filteredDay = (!filter || !filter.match(/snow|hike/))
                            ? days
                            : days.filter((day) => day[this.props.filter])
    return(<div>
            <div className="jumbotron"></div>
            <aside className="col-md-3"></aside>
            <div className="table-responsive col-md-6">
              <table className="table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Mountain</th>
                    <th>Snow</th>
                    <th>Hike</th>
                  </tr>
                </thead>

                <tbody>
                  { filteredDay.map((day, i) => <SkiDayRow  key={i} { ...day }/> )}
                </tbody>
              </table>
              <div className="btn-g">
                <Link to="/list-days" className="btn btn-primary">Ski Days</Link>
                <Link to="/list-days/snow" className="btn btn-primary">Snow Days</Link>
                <Link to="/list-days/hike" className="btn btn-primary">Hike Days</Link>
              </div>
            </div>
        </div>
    ) // return
  } // render
} // class

SkiDayList.propTypes = {
  days: function(props) {
    if (!Array.isArray(props.days)) return new Error("SkiDayList: (not array)")
    if (!props.days.length) return new Error("SkiDayList: (is empty)")
    return null
  }
}

export default SkiDayList

// use spread operator instead of assign each one
// { ...day}
// is the same as
// <SkiDayRow  key={i} date={day.date} mountain={day.mountain} snow={day.snow} hike={day.hike}/>
