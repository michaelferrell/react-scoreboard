import React, { Component } from 'react';

class SingleDigitBox extends Component {
	render() {
		const class_names = this.props.digits === '3' ? 'single-digit-box box-third' : 'single-digit-box box-half';
		return(
	    <div className={class_names}>
	      <div className="digit-positioning digit-silhouette">
	        <span className="digit-text">8</span>
	      </div>
	      <div className="digit-positioning digit-live">
	        <span className="digit-text">{this.props.digit}</span>
	      </div>
	    </div>
		);
	}
}

export default SingleDigitBox;