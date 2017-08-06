import React, { Component } from 'react';
import Scoreboard from './Scoreboard';
import Digital7 from './../fonts/font-digital-7.css';
import DotMatrix from './../fonts/dotmatrix.css';
import './../style/App.css';

const QUARTER_LENGTH = 720;
// const QUARTER_LENGTH = 3
const QUARTERS = 4;
const TOTAL_PERIODS = 4;
const ADD_AMOUNT = 2;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: QUARTER_LENGTH,
      cur_period: 1,
      total_periods: TOTAL_PERIODS,
      game_is_live: false,
      home_score: 2,
      visitor_score: 10
    };
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
    this.setState({'visitor_score': this.state.visitor_score + ADD_AMOUNT})
  }

  render() {
    return (
      <div>
        <Scoreboard
          time={this.state.time}
          home_score={this.state.home_score}
          visitor_score={this.state.visitor_score}
          cur_period={this.state.cur_period}
          periods={this.state.total_periods}>
        </Scoreboard>
        <div className="toolbar">
          <button className="btn-demo" onClick={this.addHomeScore}>
           +2 Home
          </button>
          <button className="btn-demo" onClick={this.addAwayScore}>
           +2 Away
          </button>
        </div>
      </div>
    );
  }
}

export default App;
