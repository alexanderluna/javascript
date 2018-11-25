import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SesasonDisplay';
import Loading from './Loading';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			lat: null,
			loading: null,
			errorMessage: null
		};
		this.getLocation = this.getLocation.bind(this);
	}

	getLocation() {
		this.setState({ loading: true });
		window.navigator.geolocation.getCurrentPosition(
			pos => this.setState({
				lat: pos.coords.latitude,
				loading: false
			}),
			err => this.setState({
				errorMessage: err.message,
				loading: false
			})
		)
	}

	render() {
		const { lat, loading, errorMessage } = this.state;
		return (
			<div className="season-display" onClick={this.getLocation}>
				{lat && <SeasonDisplay lat={lat} />}
				{loading && <Loading message='Please accept location request' />}
				{errorMessage && <h1>{errorMessage}</h1>}
			</div>
		)
	}
};

ReactDOM.render(<App />, document.getElementById('root'));