import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Scoreboard from '../src/js/./index';
import HomeLogo from '../src/images/golden-state-warriors-logo.png'
import AwayLogo from '../src/images/cleveland-cavaliers-logo.png'
import './demo.css';

const QUARTER_LENGTH = 720;
// const QUARTER_LENGTH = 3
const QUARTERS = 4;
const TOTAL_PERIODS = 4;
const ADD_AMOUNT = 2;

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: QUARTER_LENGTH,
      cur_period: 1,
      total_periods: TOTAL_PERIODS,
      game_is_live: false,
      home_score: 14,
      away_score: 19,
      team_possession: 'away',
    };
  }

  componentDidMount() {
    this.startTimer();
    console.log('yasssssssssssss')
  }

  pauseTime = () => {
    if (this.state.game_is_live) {
      this.setState({game_is_live: false});
      clearInterval(this.state.timer_interval);
    }
  }

  startTimer = () => {;
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
    console.log('End of ' + this.state.cur_period)
    this.setState({game_is_live: false});
    clearInterval(this.state.timer_interval);
    let cur_period = this.state.cur_period + 1;
    if (cur_period <= QUARTERS) {
      this.setState({
        time: QUARTER_LENGTH,
        cur_period: cur_period,
      });
      this.startTimer();
    } else {
      this.gameOver();
    }
  }

  gameOver = () => {
    console.log('gameover!');
  }

  addHomeScore = () => {
    this.setState({'home_score': this.state.home_score + ADD_AMOUNT})
  }

  addAwayScore = () => {
    this.setState({'away_score': this.state.away_score + ADD_AMOUNT})
  }

  render() {
    let {
      time,
      home_score,
      away_score,
      cur_period,
      total_periods,
      team_possession
    } = this.state;

    const demo_btn_styles = {
      borderRadius: '4px',
      backgroundColor: '#272727',
      margin: '20px 10px 0 10px',
      padding: '3px 5px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      fontSize: '1.1rem',
      lineHeight: '1.1rem',
      fontWeight: '300',
      color: '#FFFFFF'
    }

    return (
      <div>
        <div className="scoreboard-control-panel" style={{textAlign: 'center'}}>
          <button className="btn-demo" style={demo_btn_styles} onClick={this.addHomeScore}>
           +2 Home
          </button>
          <button className="btn-demo" style={demo_btn_styles} onClick={this.addAwayScore}>
           +2 Away
          </button>
        </div>
        <div style={{'marginTop':'40px', 'padding': '20px'}}>
        <Scoreboard
          // theme="whale"
          // theme="dragon"
          // theme="unicorn"
          // theme="unicorn-dark"
          // theme="ice"
          time={time}
          home_score={home_score}
          home_label="Warriors"
          home_logo={HomeLogo}
          away_score={away_score}
          away_label="Cavaliers"
          away_logo={AwayLogo}
          cur_period={cur_period}
          // team_possession={team_possession}
          period_label="Period"
          period_indicators="true"
          total_periods={total_periods}>
        </Scoreboard>
        </div>
        <div style={{'marginTop':'40px', 'padding': '20px'}}>
          <Scoreboard
            time={time}
            home_score={home_score}
            home_label="Home"
            away_score={away_score}
            away_label="Visitor"
            cur_period={cur_period}
            period_label="Half"
            total_periods={total_periods}>
          </Scoreboard>
        </div>
      </div>
    );
  }
}

// export default Demo;
ReactDOM.render(<Demo />, document.getElementById('root'));
