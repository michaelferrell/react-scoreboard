import React, { Component } from 'react';

class SoloDigitBox extends Component {
	render() {
		const class_names = this.props.digits === '3' ? 'solo-digit-box third' : 'solo-digit-box half';
		return (
	    <div className={class_names}>
	      <div className="silhouette">8</div>
	      <div className="live">{this.props.digit}</div>
	    </div>
    )
	}
}

export default SoloDigitBox;