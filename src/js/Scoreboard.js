import React, { Component } from 'react';
import GameClock from './GameClock';
import LabelBox from './LabelBox';
import ScoreBox from './ScoreBox';
import PeriodIndicators from './PeriodIndicators';

class Scoreboard extends Component {
  render() {
    return (
      <article className="react-scoreboard">
        <div className="flex-row">
          <div className="col-score">
            <LabelBox label="Home"></LabelBox>
            <ScoreBox score={this.props.home_score}></ScoreBox>
          </div>
          <div className="col-center">
            <GameClock time={this.props.time}></GameClock>
            <LabelBox label="Period" type="period"></LabelBox>
            <PeriodIndicators total_periods={this.props.total_periods} cur_period={this.props.cur_period}></PeriodIndicators>
          </div>
          <div className="col-score">
            <LabelBox label="Away"></LabelBox>
            <ScoreBox score={this.props.visitor_score}></ScoreBox>
          </div>
        </div>
      </article>
    );
  }
}

export default Scoreboard;
