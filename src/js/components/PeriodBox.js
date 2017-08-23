import React, { Component } from 'react';
import SingleDigitBox from './SingleDigitBox';


class PeriodBox extends Component {
  render() {
    let digit = 2;
    return (
    	<div className="period-box">
	      <div className="integer-box">
	        <SingleDigitBox digit={digit} type='period'></SingleDigitBox>
	      </div>
      </div>
    )
  }
}

export default PeriodBox;