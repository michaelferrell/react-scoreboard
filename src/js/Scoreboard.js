import React, { Component } from 'react';
import GameClock from './GameClock';
import LabelBox from './LabelBox';
import NumberBox from './NumberBox';
import PeriodBox from './PeriodBox';

class Scoreboard extends Component {
  render() {
    return (
      <article className="scoreboard thseme-pinkX">
        <div className="flex-wrap">
          <div className="flex-row">
            <div className="flex-col-score">
              <LabelBox label="Home"></LabelBox>
              <NumberBox score={this.props.home_score}></NumberBox>
            </div>
            <div className="flex-col-timer">
              <GameClock time={this.props.time}></GameClock>
              <LabelBox label="Period" type="period"></LabelBox>
              <PeriodBox total_periods={this.props.total_periods} cur_period={this.props.cur_period}></PeriodBox>
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
