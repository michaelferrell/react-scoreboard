import React, { Component } from 'react';
import Scoreboard from './Scoreboard';
import './App.css';

// const QUARTER_LENGTH = 720;
const QUARTER_LENGTH = 3;
const QUARTERS = 4;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: QUARTER_LENGTH,
      period: 1,
      game_is_live: false,
      home_score: 103,
      visitor_score: 94
    };
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    console.log('i will unmount')
  }

  unmount() {
    console.log('i unmounted')
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
      this.quarterEnd()
    }
  }

  quarterEnd = () => {
    console.log('end of ' + this.state.period)
    this.setState({game_is_live: false});
    clearInterval(this.state.timer_interval);
    let period = this.state.period + 1;
    if (period <= QUARTERS) {
      this.setState({
        time: QUARTER_LENGTH,
        period: period,
      });
      this.startTimer();
    } else {
      this.gameOver();
    }
  }

  gameOver = () => {
    console.log('gameover!');
  }

  render() {
    return (
      <div>
        <Scoreboard time={this.state.time} home_score={this.state.home_score} visitor_score={this.state.visitor_score} period={this.state.period}></Scoreboard>
        <button className="btn-pause" onClick={this.pauseTime}>pause</button>
        <button className="btn-pause" onClick={this.startTimer}>resume</button>
      </div>
    );
  }
}

export default App;
