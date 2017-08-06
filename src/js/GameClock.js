import React, { Component } from 'react';
import SoloDigitBox from './SoloDigitBox';
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
      <div className="number-box">
        <div className="display time">
          <SoloDigitBox digit={this.displayDigit(this.props.time, 'minutes', 'ones')} digits="2"></SoloDigitBox>
          <SoloDigitBox digit={this.displayDigit(this.props.time, 'minutes', 'tens')} digits="2"></SoloDigitBox>
        </div>
        <span className="number-separator">:</span>
        <div className="display time">
          <SoloDigitBox digit={this.displayDigit(this.props.time, 'seconds', 'ones')} digits="2"></SoloDigitBox>
          <SoloDigitBox digit={this.displayDigit(this.props.time, 'seconds', 'tens')} digits="2"></SoloDigitBox>
        </div>
      </div>
    </section>
    );
  }
}

export default GameClock;
