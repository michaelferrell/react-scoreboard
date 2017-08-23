import React, { Component } from 'react';

class SingleDigitBox extends Component {
	render() {
		return(
      <div className="single-digit-box" data-type={this.props.type} data-digits={this.props.digits}>
        <div className="digit-live digit-style">{this.props.digit}</div>
        <div className="digit-silhouette digit-style"></div>
      </div>
		);
	}
}

export default SingleDigitBox;