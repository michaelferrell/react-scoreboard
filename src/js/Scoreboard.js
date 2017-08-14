import { Component } from 'react';
import GameClock from './components/GameClock';
import Themes from './helpers/themes';
import LabelBox from './components/LabelBox';
import ScoreBox from './components/ScoreBox';
import TeamLogo from './components/TeamLogo';
import PossessionIndicators from './components/PossessionIndicators';
import PeriodIndicators from './components/PeriodIndicators';

class Scoreboard extends Component {
  render() {
    let {
      theme,
      home_score,
      home_label,
      home_logo,
      time,
      total_periods,
      period_label,
      cur_period,
      away_score,
      away_label,
      away_logo,
      team_possession
    } = this.props;

    theme = theme === undefined ? Themes['dark'] : Themes[theme];

    let possession_indicators = null;
    if (team_possession !== undefined) {
      possession_indicators = <PossessionIndicators team_possession={team_possession} theme={theme}></PossessionIndicators>;
    }

    let render_home_logo = null;
    if (home_logo !== undefined) {
      render_home_logo = <TeamLogo src={home_logo} team="home"></TeamLogo>;
    }

    let render_away_logo = null;
    if (away_logo !== undefined) {
      render_away_logo = <TeamLogo src={away_logo} team="away"></TeamLogo>;
    }

    return (
      <section className={"react-scoreboard " + theme}>
        <div className="flex-row">
          <div className="col-main">
              <div className="flex-row">
                <div className="col-clock">
                  <GameClock time={time} theme={theme}></GameClock>
                </div>
              </div>
          </div>
        </div>
        <div className="flex-row">
          <div className="col-logo">
            {render_home_logo}
          </div>
          <div className="col-main">
            <div className="flex-row">
              <div className="col-score col-home">
                <LabelBox label={home_label} theme={theme}></LabelBox>
                <ScoreBox score={home_score} theme={theme}></ScoreBox>
              </div>
              <div className="col-score col-away">
                <LabelBox label={away_label} theme={theme}></LabelBox>
                <ScoreBox score={away_score} theme={theme}></ScoreBox>
              </div>
              <div className="col-period">
                {possession_indicators}
                <LabelBox label={period_label} theme={theme}></LabelBox>
                <PeriodIndicators total_periods={total_periods} cur_period={cur_period} theme={theme}></PeriodIndicators>
              </div>
            </div>
          </div>
          <div className="col-logo">
            {render_away_logo}
          </div>
        </div>
      </section>
    );
  }
}

export default Scoreboard;
