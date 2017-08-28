import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Scoreboard from '../../src/js/index';
import HomeLogo from '../../src/images/golden-state-warriors-logo.png'
import AwayLogo from '../../src/images/cleveland-cavaliers-logo.png'
import './dev-server.css';

class App extends Component {
  render() {
    return (
      <div>
        {/*TODO: update time property to be period_length*/}
        <ScoreboardDemo
          sport_name="Basketball"
          add_amount={2}
          time={720}
          period_label="Period"
          period_box={false}
          period_indicators={true}
          cur_period={1}
          total_periods={4}
          home_score={12}
          away_score={9}
          home_label="Warriors"
          away_label="Cavaliers"
          home_logo={HomeLogo}
          away_logo={AwayLogo}
        />
        <ScoreboardDemo
          sport_name="Hockey"
          add_amount={1}
          time={1200}
          period_label="Period"
          period_box={true}
          period_indicators={true}
          cur_period={1}
          total_periods={3}
          home_score={1}
          away_score={0}
          home_label="Flyers"
          away_label="Tigers"
        />
        <ScoreboardDemo
          sport_name="Soccer"
          add_amount={1}
          time={2700}
          period_label="Half"
          period_box={true}
          period_indicators={false}
          cur_period={1}
          total_periods={2}
          home_score={2}
          away_score={3}
          home_label="Man United"
          away_label="Real Madrid"
        />
      </div>
    );
  }
}

class ScoreboardDemo extends Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, this.props);
    this.state.game_is_live = false;
  }

  componentDidMount() {
    this.startTimer();
  }

  pauseTime = () => {
    if (this.state.game_is_live) {
      this.setState({game_is_live: false});
      clearInterval(this.state.timer_interval);
    }
  }

  startTimer = () => {
    if (!this.state.game_is_live) {
      this.setState({
        game_is_live: true,
        timer_interval: setInterval(this.timer, 1000)
      })
    }
  }

  timer = () => {
    let seconds = this.state.time - 1;
    if (seconds >= 0) {
      this.setState({time: seconds})
    } else {
      this.EndPeriod()
    }
  }

  EndPeriod = () => {
    console.log('End of ' + this.state.period_label + ' ' + this.state.cur_period)
    this.setState({game_is_live: false});
    clearInterval(this.state.timer_interval);
    let cur_period = this.state.cur_period + 1;
    if (cur_period <= this.props.total_periods) {
      this.setState({
        time: this.props.period_length,
        cur_period: cur_period,
      });
      this.startTimer();
    } else {
      this.gameOver();
    }
  }

  gameOver = () => {
    console.log('The ' + this.state.sport_name + ' game is over!');
  }

  addHomeScore = () => {
    this.setState({'home_score': this.state.home_score + this.state.add_amount})
  }

  addAwayScore = () => {
    this.setState({'away_score': this.state.away_score + this.state.add_amount})
  }

  render() {
    let {
      add_amount,
      time,
      home_score,
      away_score,
      home_label,
      away_label,
      home_logo,
      away_logo,
      cur_period,
      period_label,
      period_box,
      period_indicators,
      total_periods,
      team_possession
    } = this.state;

    return (
      <div className="demo-app">
        <h2 className="demo-title">{this.state.sport_name}</h2>
        <div className="scoreboard-control-panel">
          <button className="btn-demo" onClick={this.addHomeScore}>
           +{add_amount} Points Home
          </button>
          <button className="btn-demo" onClick={this.addAwayScore}>
           +{add_amount} Points Away
          </button>
        </div>
        <div className="demo-container">
          <Scoreboard
            // theme="whale"
            // theme="dragon"
            // theme="unicorn"
            // theme="unicorn-dark"
            // theme="ice"
            time={time}
            home_score={home_score}
            away_score={away_score}
            home_label={home_label}
            away_label={away_label}
            home_logo={home_logo}
            away_logo={away_logo}
            cur_period={cur_period}
            period_label={period_label}
            period_box={period_box}
            period_indicators={period_indicators}
            total_periods={total_periods}>
          </Scoreboard>
        </div>
      </div>
    );
  }
}

// export default Demo;
ReactDOM.render(<App />, document.getElementById('root'));
