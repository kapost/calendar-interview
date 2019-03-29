import React from "react";
import moment from "moment";

import MonthView from "./monthView";
import Header from "./header";

import { calendarComponent, headerWrapper, viewWrapper, contextPanelWrapper, bodyWrapper } from "../styles/calendar.module.css";

const VIEW_MAPPING = {
  month: MonthView,
};

export default class Calendar extends React.Component {
  render() {
    const { resolution, ...dateParams } = this.getRouteParams();

    const ViewComponent = VIEW_MAPPING[resolution] || MonthView;
    const momentizedDate = this.getMomentizedDate();

    return (
      <div className={calendarComponent}>
        <div className={headerWrapper}>
          <Header
            {...dateParams}
            momentizedDate={this.getMomentizedDate()}
            onChangeDate={this.handleChangeDate}
            resolution={resolution}
          />
        </div>
        <div className={bodyWrapper}>
          <div className={viewWrapper}>
            <ViewComponent {...dateParams} momentizedDate={momentizedDate} />
          </div>
          <div className={contextPanelWrapper} />
        </div>
      </div>
    );
  }

  getMomentizedDate = () => {
    const { year, month: humanMonth, day } = this.getRouteParams();
    const month = humanMonth - 1; // Jan === 0

    return moment([year, month, day]);
  }

  getRouteParams = () => {
    const { resolution, year, month, day } = this.props.match.params;

    return { resolution, year: Number(year), month: Number(month), day: Number(day) };
  }

  handleChangeDate = (updates) => {
    this.props.history.push(this.buildUrl(updates));
  }

  buildUrl = (params = {}) => {
    const { resolution, year, month, day } = { ...this.getRouteParams(), ...params };

    return `/${resolution}/${year}/${month}/${day}`;
  }
}
