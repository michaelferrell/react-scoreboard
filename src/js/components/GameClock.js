import React, { Component } from 'react';
import SingleDigitBox from './SingleDigitBox';
import CommonMethods from '../helpers/CommonMethods';

class GameClock extends Component {
  displayMinutes = (time) => {
    let minutes = Math.floor(time / 60); // round down to neastest integer
    let minutes_double_digits = ('0' + minutes).slice(-2);
    return minutes_double_digits
  }

  displaySeconds = (time) => {
    let minutes = Math.floor(time / 60); // round down to neastest integer
    let seconds = time - minutes * 60;
    let seconds_double_digits = ('0' + seconds).slice(-2);
    return seconds_double_digits;
  }

  displayDigit = (time, type, place_val) => {
    let number = type === 'seconds' ? this.displaySeconds(time) : this.displayMinutes(time);
    let arr = [];
    for (var i = 0; i < number.length; i++) {
      arr.push(number.charAt(i))
    }
    let index = CommonMethods.placeValueLookup(place_val);
    return arr[index];
  }

  render() {
    let { theme, time } = this.props;
    const type = 'time';
    return (
      <div className="flex-row">
        <div className="col-minutes">
          <div className={"integer-box " + theme}>
            <SingleDigitBox digit={this.displayDigit(time, 'minutes', 'ones')} type={type} digits="2"></SingleDigitBox>
            <SingleDigitBox digit={this.displayDigit(time, 'minutes', 'tens')} type={type} digits="2"></SingleDigitBox>
          </div>
        </div>
        <div className="colon-box">:</div>
          <div className="col-seconds">
          <div className={"integer-box " + theme}>
            <SingleDigitBox digit={this.displayDigit(time, 'seconds', 'ones')} type={type} digits="2"></SingleDigitBox>
            <SingleDigitBox digit={this.displayDigit(time, 'seconds', 'tens')} type={type} digits="2"></SingleDigitBox>
          </div>
        </div>
      </div>
    );
  }
}

export default GameClock;
