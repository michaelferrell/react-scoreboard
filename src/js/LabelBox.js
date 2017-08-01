import React, { Component } from 'react';

class TextLabel extends Component {
	render() {
		return (
			<div className="label-box"><span class="label-text">{this.props.label}</span></div>
		)
	}
}

export default TextLabel;