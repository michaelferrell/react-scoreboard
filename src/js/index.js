import { Component } from 'react';

import GameClock from './components/GameClock';
import Themes from './helpers/themes';
import LabelBox from './components/LabelBox';
import ScoreBox from './components/ScoreBox';
import TeamLogo from './components/TeamLogo';
import PossessionIndicators from './components/PossessionIndicators';
import PeriodBox from './components/PeriodBox';
import PeriodIndicators from './components/PeriodIndicators';
import SingleDigitBox from './components/SingleDigitBox';

import DsDigital from '../fonts/ds-digital.css';

import '../style/index.css';

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
      team_possession,
      period_indicators
    } = this.props;

    theme = theme === undefined ? Themes['dark'] : Themes[theme];

    let layout_type = 'default';
    if (home_logo !== undefined && away_logo !== undefined) {
      layout_type = 'with-logos';
    }

    let possession_indicators = null;
    if (team_possession !== undefined) {
      possession_indicators = <PossessionIndicators team_possession={team_possession} theme={theme}></PossessionIndicators>;
    }

    let render_home_logo = null;
    if (home_logo !== undefined) {
      render_home_logo = <TeamLogo src={home_logo} team="home" layout={layout_type}></TeamLogo>;
    }

    let render_away_logo = null;
    if (away_logo !== undefined) {
      render_away_logo = <TeamLogo src={away_logo} team="away" layout={layout_type}></TeamLogo>;
    }

    let render_period = null;
    if (period_indicators == 'true') {
      render_period = '';
    }

    let render_period_box = <PeriodBox></PeriodBox>;
    if (period_indicators == 'true') {
      render_period_box = null;
    }

    let render_period_indicators = null;
    if (period_indicators == 'true') {
      render_period_indicators = <PeriodIndicators total_periods={total_periods} cur_period={cur_period} theme={theme}></PeriodIndicators>;
    }

    return (
      <section className={"react-scoreboard " + theme} data-layout={layout_type}>
        <div className="flex-row">
          <div className="col-content" data-layout={layout_type}>
            <GameClock time={time} theme={theme}></GameClock>
          </div>
        </div>
        <div className="flex-row">
          {render_home_logo}
          <div className="col-content" data-layout={layout_type}>
            <div className="flex-row">
              <div className="col-score col-home">
                <LabelBox label={home_label} theme={theme}></LabelBox>
                <ScoreBox score={home_score} theme={theme}></ScoreBox>
              </div>
              <div className="col-score col-away">
                <LabelBox label={away_label} theme={theme}></LabelBox>
                <ScoreBox score={away_score} theme={theme}></ScoreBox>
              </div>
              <div className="col-period" data-layout={layout_type}>
                {possession_indicators}
                <LabelBox label={period_label} theme={theme}></LabelBox>
                {render_period_box}
                {render_period_indicators}
              </div>
            </div>
          </div>
          {render_away_logo}
        </div>
      </section>
    );
  }
}

export default Scoreboard;
