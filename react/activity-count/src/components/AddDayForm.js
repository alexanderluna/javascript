import { Component } from 'react'
import PropTypes from 'prop-types'

const mountainList = [
  'mavericks',
  'yosemiti',
  'sierra',
  'high sierra',
  'fuji',
  'harz',
  'andes',
  'paso de san juan',
  'toscana',
  'hakone'
]

class AutoComplete extends Component {
  get value() {
    return this.refs.inputMountain.value
  }

  set value(inputValue) {
    this.refs.inputMountain.value = inputValue
  }

  render() {
    const { options } = this.props
    return(
      <div>
        <input className="form-control" type="text" ref="inputMountain" list="mountain-list" />
        <datalist id="mountain-list">
          { options.map((opt, i) => <option key={i}>{ opt }</option>)}
        </datalist>
      </div>
    )
  }
}


class AddDayForm extends Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  submit(event) {
    event.preventDefault()
    const { mountain, date, snow, hike } = this.refs
    this.props.onNewDay({
      mountain: mountain.value,
      date: date.value,
      snow: snow.checked,
      hike: hike.checked
    })
    mountain.value = ''
    date.value = ''
    snow.checked = false
    hike.checked = false
  }

  render(){

    const { mountain, date, snow, hike } = this.props

    return(
      <div>
        <aside className="col-md-3"></aside>
        <div className="col-md-6">
          <h2>Add new day</h2>
          <hr/>

          <form onSubmit={ this.submit }>
            <label htmlFor="mountain">Mountain Name</label>
            <AutoComplete options={ mountainList } ref="mountain" required/>

            <label htmlFor="date">Date</label>
            <input className="form-control" type="date" defaultValue={ date } ref="date" required/>

            <div className="input-group">
              <span className="input-group-addon">
                <input type="checkbox" defaultChecked={ snow } ref="snow"/>
              </span>
              <label htmlFor="snow" className="form-control">Snow Planned ?</label>
            </div>

            <div className="input-group">
              <span className="input-group-addon">
                <input type="checkbox" defaultChecked={ hike } ref="hike"/>
              </span>
              <label htmlFor="hike" className="form-control">Hike Planned ?</label>
            </div>

            <button className="btn btn-primary pull-right">Add Day</button>
          </form>

        </div>
      </div>
    )
  }
}

AddDayForm.defaultProps = {
  mountain: "Fuji Mountain",
  date: "2014-01-15",
  snow: true,
  hike: false
}

AddDayForm.propTypes = {
  mountain: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  snow: PropTypes.bool.isRequired,
  hike: PropTypes.bool.isRequired
}

export default AddDayForm
