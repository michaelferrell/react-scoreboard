import React, { Component } from 'react';
import Time from './Time';

class Scoreboard extends Component {
  render() {
    return (
      <article className="scoreboard">
        <div className="flex-wrap">
          <div className="flex-row">
            <div className="flex-col-score">
              <div className="label-bg team-label">Home</div>
              <div className="number-box">
                <span className="display score">{this.props.home_score}</span>
              </div>
              <div className="bonus-label">Bonus</div>
            </div>
            <div className="flex-col-timer">
              <Time time={this.props.time}></Time>
              <div className="label-bg period-label">Period</div>
              <div className="period-number">{this.props.period}</div>
            </div>
            <div className="flex-col-score">
              <div className="label-bg team-label">Away</div>
              <div className="number-box">
                <span className="display score">{this.props.visitor_score}</span>
              </div>
              <div className="bonus-label">Bonus</div>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default Scoreboard;
