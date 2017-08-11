import React, { Component } from 'react';

class WinningIndicator extends Component {
	render() {
		let { theme, winning_team } = this.props;
		return (
			<div className={"winning-indicator " + theme} data-winning-team={winning_team}>
				<div className="triangle triangle-left"></div>
				<div className="triangle triangle-right"></div>
			</div>
		)
	}
}

export default WinningIndicator;