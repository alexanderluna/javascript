import { Component }  from 'react'
import SkiDayCount    from './SkiDayCount'
import SkiDayList     from './SkiDayList'
import AddDayForm     from './AddDayForm'
import Menu           from './Menu'
import MembersList    from './MembersList'
import fetch          from 'isomorphic-fetch'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allSkiDays: [
        {
          mountain: "Fuji",
          date: "2015-2-15",
          snow: true,
          hike: true
        },
        {
          mountain: "Hartz",
          date: "2012-4-5",
          snow: true,
          hike: false
        },
        {
          mountain: "Reichenbach",
          date: "1891/5/4",
          snow: false,
          hike: true
        }
      ],
      members: [],
      loading: false
    } // state
    this.addDay = this.addDay.bind(this)
  } // constructor

  componentDidMount() {
      this.setState({loading: true})
      fetch('https://api.randomuser.me/?nat=US&results=12')
        .then(response => response.json())
        .then(json => json.results)
        .then(members => this.setState({
          members,
          loading: false
        }))
  }

  addDay(newDay) {
    this.setState({
      allSkiDays: [
        ...this.state.allSkiDays,
        newDay
      ]
    })
  }

  countDays(filter) {
    return this.state.allSkiDays.filter((day) => {
      if (filter) return day[filter]
      return day
    }).length
  }

  render() {
    return(<div className="app">
            <Menu />
            { (this.props.location.pathname === "/")
              ? <SkiDayCount  total={ this.countDays() }
                              snow={ this.countDays("snow") }
                              hike={ this.countDays("hike") } />
              : (this.props.location.pathname === "/add-day")
              ? <AddDayForm onNewDay={ this.addDay }/>
              : (this.props.location.pathname === "/members")
              ? <MembersList members={ this.state.members } />
              :<SkiDayList days={ this.state.allSkiDays } filter={this.props.params.filter}/>}
          </div>)
  }
}

export default App
