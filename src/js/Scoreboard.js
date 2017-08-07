import React, { Component } from 'react';
import GameClock from './GameClock';
import LabelBox from './LabelBox';
import NumberBox from './NumberBox';
import PeriodIndicators from './PeriodIndicators';

class Scoreboard extends Component {
  render() {
    return (
      <article className="scoreboard">
        <div className="flex-row">
          <div className="col-score">
            <LabelBox label="Home"></LabelBox>
            <NumberBox score={this.props.home_score}></NumberBox>
          </div>
          <div className="col-center">
            <GameClock time={this.props.time}></GameClock>
            <LabelBox label="Period" type="period"></LabelBox>
            <PeriodIndicators total_periods={this.props.total_periods} cur_period={this.props.cur_period}></PeriodIndicators>
          </div>
          <div className="col-score">
            <LabelBox label="Away"></LabelBox>
            <NumberBox score={this.props.visitor_score}></NumberBox>
          </div>
        </div>
      </article>
    );
  }
}

export default Scoreboard;
