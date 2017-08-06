import React, { Component } from 'react';
import PeriodIndicator from './PeriodIndicator';

class PeriodBox extends Component {
  setActiveState = (item) => {
    // FIX: currently runs every second
    return item <= this.props.cur_period ? true : false;
  }
  render() {
    const periods_arr = [1, 2, 3, 4];
    const items = periods_arr.map((item) =>
      <PeriodIndicator key={item} item={item} cur_period={this.props.cur_period} active={this.setActiveState(item)}></PeriodIndicator>
    );
    return (
      <ul className="period-indicators">
        {items}
      </ul>
    )
  }
}

export default PeriodBox;