import React, { Component } from 'react';
import GameClock from './components/GameClock';
import Themes from './helpers/themes';
import LabelBox from './components/LabelBox';
import ScoreBox from './components/ScoreBox';
import WinningIndicator from './components/WinningIndicator';
import PeriodIndicators from './components/PeriodIndicators';

class Scoreboard extends Component {
  render() {
    let { theme, home_score, time, total_periods, cur_period, visitor_score} = this.props;
    theme = theme === undefined ? Themes['dark'] : Themes[theme];
    return (
      <section className={"react-scoreboard " + theme}>
        <div className="flex-row">
          <div className="col-full">
            <GameClock time={time} theme={theme}></GameClock>
          </div>
        </div>
        <div className="flex-row">
            <div className="col-score">
              <LabelBox label="Home" theme={theme}></LabelBox>
              <ScoreBox score={home_score} theme={theme}></ScoreBox>
            </div>
            <div className="col-period">
              <WinningIndicator winning_team="away" theme={theme}></WinningIndicator>
              <PeriodIndicators total_periods={total_periods} cur_period={cur_period} theme={theme}></PeriodIndicators>
            </div>
            <div className="col-score">
              <LabelBox label="Away" theme={theme}></LabelBox>
              <ScoreBox score={visitor_score} theme={theme}></ScoreBox>
            </div>
        </div>
      </section>
    );
  }
}

export default Scoreboard;
