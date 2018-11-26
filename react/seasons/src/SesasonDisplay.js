import './SeasonDisplay.css';
import React from 'react';

class SeasonDisplay extends React.Component {

	season = {
		summer: {
			icon: 'massive sun icon',
			text: 'Let\'s hit the beach'
		},
		winter: {
			icon: 'massive snowflake icon',
			text: 'Burr, its cold'
		}
	}

	getSeasonText(lat, month = new Date().getMonth()) {
		if (month > 2 && month < 9)
			return lat > 0 ? this.season.summer : this.season.winter;
		else
			return lat < 0 ? this.season.winter : this.season.summer;
	}

	render() {
		const { icon, text } = this.getSeasonText(this.props.lat);
		return (
			<div className="season-display" >
				<i className={icon} />
				<h1>{text}</h1>
				<i className={icon} />
			</div >
		)
	}
}

export default SeasonDisplay;