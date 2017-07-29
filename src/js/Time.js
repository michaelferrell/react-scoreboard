import React, { Component } from 'react';

class Time extends Component {
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

  render() {
    return (
    <div>
      <div className="number-box">
        <span className="display time">{this.displayMinutes(this.props.time)}</span><span className="colon">:</span><span className="display time">{this.displaySeconds(this.props.time)}</span>
      </div>
    </div>
    );
  }
}

export default Time;
