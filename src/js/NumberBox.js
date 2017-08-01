import React, { Component } from 'react';

class NumberBox extends Component {
	render() {
		return (
	    <div className="number-box">
	      <span className="display score">{this.props.score}</span>
	    </div>
		)
	}
}

export default NumberBox;