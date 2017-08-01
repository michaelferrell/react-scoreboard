import React, { Component } from 'react';
import Time from './Time';
import LabelBox from './LabelBox';
import NumberBox from './NumberBox';

class Scoreboard extends Component {
  render() {
    return (
      <article className="scoreboard">
        <div className="flex-wrap">
          <div className="flex-row">
            <div className="flex-col-score">
              <LabelBox label="Home"></LabelBox>
              <NumberBox score={this.props.home_score}></NumberBox>
            </div>
            <div className="flex-col-timer">
              <Time time={this.props.time}></Time>
              <LabelBox label="Period"></LabelBox>
              <div className="period-number">{this.props.period}</div>
            </div>
            <div className="flex-col-score">
              <LabelBox label="Away"></LabelBox>
              <NumberBox score={this.props.visitor_score}></NumberBox>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default Scoreboard;
