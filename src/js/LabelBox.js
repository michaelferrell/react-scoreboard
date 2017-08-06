import React, { Component } from 'react';

class TextLabel extends Component {
	render() {
		const class_names = this.props.type === 'period' ? 'label-box period-label' : 'label-box';
		return (
			<div className={class_names}><span class="label-text">{this.props.label}</span></div>
		)
	}
}

export default TextLabel;