import React, { Component } from 'react';

class PossessionIndicators extends Component {
	render() {
		let { theme, team_possession } = this.props;
		return (
			<div className={"possession-indicators " + theme} data-team-possession={team_possession}>
				<div className="triangle triangle-left"></div>
				<div className="triangle triangle-right"></div>
			</div>
		)
	}
}

export default PossessionIndicators;