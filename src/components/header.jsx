import React from "react";
import { number, func } from "prop-types";
import moment from "moment";

import Icon from "./icon";

import { headerComponent, changeDateButton, todayButton } from "../styles/header.module.css";

export default class Header extends React.Component {
  static propTypes = {
    month: number.isRequired,
    onChangeDate: func.isRequired,
  }

  render() {
    switch (this.props.resolution) {
      case "month":
      default:
        return this.renderMonthHeader();
    }
  }

  renderMonthHeader = () => {
    return (
      <div className={headerComponent}>
        <button className={todayButton} onClick={this.handleSetToday}>
          Today
        </button>
        <button className={changeDateButton} onClick={this.handleChangeMonthCurry(-1)}>
          <Icon name="angle-left" />
        </button>
        <button className={changeDateButton} onClick={this.handleChangeMonthCurry(1)}>
          <Icon name="angle-right" />
        </button>
        {this.props.momentizedDate.format("MMMM YYYY")}
      </div>
    )
  }

  handleChangeMonthCurry = (prevOrNext) => {
    return () => {
      const month = (this.props.month + prevOrNext);

      this.props.onChangeDate(this.getDateParams(month));
    };
  }

  getDateParams = (month) => {
    const baseParams = { day: 1, month, year: this.props.year };

    switch (month) {
      case 12:
        return { ...baseParams, month: 0, year: this.props.year + 1 };
      case -1:
        return { ...baseParams, month: 11, year: this.props.year - 1 };
      default:
        return baseParams;
    }
  }

  handleSetToday = () => {
    const [year, monthIndex, day] = moment().toArray();

    this.props.onChangeDate({ year, month: monthIndex, day });
  }
}
