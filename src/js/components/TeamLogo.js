import React, { Component } from 'react';

class TeamLogo extends Component {
	render() {
		return (
			<div className="team-logo">
				<img src={this.props.src} data-team={this.props.team}/>
			</div>
		);
	}
}

export default TeamLogo;