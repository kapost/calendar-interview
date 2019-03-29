import React from "react";
import { number, object } from "prop-types";
import moment from "moment";

import chunkArray from "../helpers/chunkArray";

import { monthViewComponent, monthViewHeader, gridWrapper, headerItem, weekRow, gridCell, cellDate } from "../styles/monthView.module.css";

const DAYS_OF_WEEK = ["sun", "mon", "tues", "wed", "thurs", "fri", "sat"];

export default class MonthView extends React.Component {
  static propTypes = {
    momentizedDate: object.isRequired, // TODO: shape
    year: number.isRequired,
    month: number.isRequired,
  };

  render() {
    const dates = this.getDates();
    const weeks = chunkArray(dates, 7);

    return (
      <div className={monthViewComponent}>
        <div className={monthViewHeader}>{DAYS_OF_WEEK.map(this.renderHeaderItem)}</div>
        <div className={gridWrapper}>
          {weeks.map((days, i) => {
            return (
              <div key={`week-${i}`} className={weekRow}>
                {days.map(this.renderGridCell)}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  renderHeaderItem = (day) => {
    return <span className={headerItem} key={day}>{day}</span>
  }

  renderGridCell = (date) => {
    const key = date.toString();

    return (
      <div
        key={key}
        className={gridCell}
      >
        <span className={cellDate}>{date.date()}</span>
      </div>
    );
  }

  getDates = () => {
    const { start, end } = this.getDateRange();
    let iterator = moment(start);
    const dates = [];

    while (iterator.isSameOrBefore(end)) {
      dates.push(moment(iterator))
      iterator.add(1, "day")
    }

    return dates;
  }

  getDateRange = () => {
    return {
      start: this.getDate().startOf("month").startOf("week"),
      end: this.getDate().endOf("month").endOf("week"),
    };
  }

  // return copy of given date so we don't mutate
  getDate = () => {
    return moment(this.props.momentizedDate);
  }
}
