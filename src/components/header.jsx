import React from "react";
import { bool, number, func } from "prop-types";
import moment from "moment";

import Icon from "./icon";

import { headerComponent, changeDateButton, todayButton, panelToggleButton } from "../styles/header.module.css";

export default class Header extends React.Component {
  static propTypes = {
    month: number.isRequired,
    onChangeDate: func.isRequired,
    onTogglePanel: func.isRequired,
    panelOpen: bool.isRequired,
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
        <div>
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
        <button className={panelToggleButton} onClick={this.props.onTogglePanel}>
          {this.props.panelOpen && <Icon name="caret-square-right" solid={false} />}
          {!this.props.panelOpen && <Icon name="caret-square-left" solid={false} />}
        </button>
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
