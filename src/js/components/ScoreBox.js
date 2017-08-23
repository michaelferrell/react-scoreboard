import React, { Component } from 'react';
import SingleDigitBox from './SingleDigitBox';
import CommonMethods from '../helpers/CommonMethods';

class ScoreBox extends Component {
	displayDigitX = (number, place_val) => {
	let arr = ('' + number).split('');
	let index = CommonMethods.placeValueLookup(place_val);
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
		let { theme, score } = this.props;
		const type = 'score';
		return (
			<div className={"integer-box " + theme}>
				<SingleDigitBox digit={this.displayDigit(score, 'hundreds')} type={type} digits="3"></SingleDigitBox>
				<SingleDigitBox digit={this.displayDigit(score, 'tens')} type={type} digits="3"></SingleDigitBox>
				<SingleDigitBox digit={this.displayDigit(score, 'ones')} type={type} digits="3"></SingleDigitBox>
			</div>
		)
	}
}

export default ScoreBox;