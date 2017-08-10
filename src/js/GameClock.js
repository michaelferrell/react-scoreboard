import React, { Component } from 'react';
import SingleDigitBox from './SingleDigitBox';
import Helpers from './Helpers';

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
    let index = Helpers.placeValueLookup(place_val);
    return arr[index];
  }

  render() {
    return (
      <section>
        <div className="integer-box integer-time">
          <SingleDigitBox digit={this.displayDigit(this.props.time, 'minutes', 'ones')} digits="2"></SingleDigitBox>
          <SingleDigitBox digit={this.displayDigit(this.props.time, 'minutes', 'tens')} digits="2"></SingleDigitBox>
        </div>
        <div className="colon-box">:</div>
        <div className="integer-box integer-time">
          <SingleDigitBox digit={this.displayDigit(this.props.time, 'seconds', 'ones')} digits="2"></SingleDigitBox>
          <SingleDigitBox digit={this.displayDigit(this.props.time, 'seconds', 'tens')} digits="2"></SingleDigitBox>
        </div>
      </section>
    );
  }
}

export default GameClock;
