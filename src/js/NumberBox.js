import React, { Component } from 'react';
import SoloDigitBox from './SoloDigitBox';
import Helpers from './Helpers';

class NumberBox extends Component {
	displayDigitX = (number, place_val) => {
    let arr = ('' + number).split('');
    let index = Helpers.placeValueLookup(place_val);
    return arr[index];
	}

	displayDigit = (number, place_val) => {
    let arr = ('' + number).split('');
    let idx = 0;
    if (arr.length === 1) {
    	if (place_val === 'ones') {
   	 		idx = 0;
    	} else {
    		return '';
    	}
    } else if (arr.length === 2) {
    	if (place_val === 'ones') {
    		idx = 1;
    	} else if (place_val === 'tens') {
    		idx = 0;
    	} else {
    		return '';
    	}
    } else if (arr.length === 3) {
    	if (place_val === 'ones') {
    		idx = 2;
    	} else if (place_val === 'tens') {
    		idx = 1;
    	} else if (place_val === 'hundreds') {
    		idx = 0;
    	}
    }
    return arr[idx];
   }

	render() {
		return (
	    <div className="number-box">
        <div className="display score">
          <SoloDigitBox digit={this.displayDigit(this.props.score, 'hundreds')} digits="3"></SoloDigitBox>
          <SoloDigitBox digit={this.displayDigit(this.props.score, 'tens')} digits="3"></SoloDigitBox>
          <SoloDigitBox digit={this.displayDigit(this.props.score, 'ones')} digits="3"></SoloDigitBox>
        </div>
	    </div>
		)
	}
}

export default NumberBox;