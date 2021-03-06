import React, { Component } from 'react';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  pointer: {
    cursor: 'pointer',
  },
};

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: props.timer.time,
      unit: props.timer.unit,
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state);
  };

  buttonStyle = () => {
    const { time, unit } = this.state;
    const { timer } = this.props;

    if (time === timer.time && unit === timer.unit) {
      return 'btn disabled';
    }

    if (timer.active) {
      return 'btn disabled';
    }

    return 'btn';
  };

  render() {
    return (
      <div style={styles.container}>
        <ul className="collection with-header">
          <li className="collection-header">
            Settings
          </li>
          <form onSubmit={this.onSubmit}>
            <li className="collection-item">
              <p>Initial Duration</p>
              <input
                type="number"
                min="1"
                value={this.state.time}
                onChange={e => this.setState({ time: e.target.value })}
              />
            </li>
            <li className="collection-item">
              <p>Units</p>
              <select
                className="browser-default"
                value={this.state.unit}
                onChange={e => this.setState({ unit: e.target.value })}
              >
                <option value="seconds">Seconds</option>
                <option value="minutes">Minutes</option>
                <option value="hours">Hours</option>
              </select>
            </li>
            <li className="collection-item right">
              <button
                type="submit"
                className={this.buttonStyle()}
              >
                Save
              </button>
            </li>
          </form>
        </ul>
        <button
          type="button"
          className="btn red"
          onClick={this.props.handleDataReset}
        >
          Reset Data
        </button>
      </div>
    );
  }
}

export default Settings;
