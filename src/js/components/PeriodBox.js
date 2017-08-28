import React, { Component } from 'react';
import SingleDigitBox from './SingleDigitBox';

class PeriodBox extends Component {
  render() {
    return (
    	<div className="period-box">
	      <div className="integer-box">
	        <SingleDigitBox digit={this.props.cur_period} type='period'></SingleDigitBox>
	      </div>
      </div>
    )
  }
}

export default PeriodBox;