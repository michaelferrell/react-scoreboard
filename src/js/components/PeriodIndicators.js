import React, { Component } from 'react';
import PeriodIndicatorItem from './PeriodIndicatorItem';

class PeriodIndicators extends Component {
  setActiveState = (item) => {
    // FIX: currently runs every second
    return item <= this.props.cur_period ? true : false;
  }
  render() {
    const total_periods = this.props.total_periods;
    let periods_arr = [];
    for (var i = 0; i < total_periods; i++) {
      periods_arr.push(i + 1);
    }
    const items = periods_arr.map((item) =>
      <PeriodIndicatorItem key={item} item={item} cur_period={this.props.cur_period} active={this.setActiveState(item)}></PeriodIndicatorItem>
    );
    return (
      <ul className={"period-indicators " + this.props.theme}>
        {items}
      </ul>
    )
  }
}

export default PeriodIndicators;