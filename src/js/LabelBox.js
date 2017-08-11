import React, { Component } from 'react';

class LabelBox extends Component {
	render() {
		let { theme, type, label } = this.props;
		const class_names = type === 'period' ? ('label-box period-label ' + theme) : ('label-box ' + theme);
		return (
			<div className={class_names}><span class="label-text">{label}</span></div>
		)
	}
}

export default LabelBox;