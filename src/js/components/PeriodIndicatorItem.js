import React, { Component } from 'react';

class PeriodIndicatorItem extends Component {
	render() {
		return (
			<li className="indicator-item" data-active={this.props.active}></li>
		)
	}
}

export default PeriodIndicatorItem;