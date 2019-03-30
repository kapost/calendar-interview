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
    const { resolution, year, month, day } = this.props;

    const ViewComponent = VIEW_MAPPING[resolution] || MonthView;
    const momentizedDate = this.getMomentizedDate();

    return (
      <div className={calendarComponent}>
        <div className={headerWrapper}>
          <Header
            year={year}
            month={month}
            day={day}
            momentizedDate={this.getMomentizedDate()}
            onChangeDate={this.handleChangeDate}
            resolution={resolution}
          />
        </div>
        <div className={bodyWrapper}>
          <div className={viewWrapper}>
            <ViewComponent
              year={year}
              month={month}
              day={day}
              momentizedDate={momentizedDate}
            />
          </div>
          <div className={sidePanelWrapper} />
        </div>
      </div>
    );
  }

  getMomentizedDate = () => {
    const { year, month, day } = this.props;

    return moment([year, month, day]);
  }

  handleChangeDate = (updates) => {
    this.props.history.push(this.buildUrl(updates));
  }

  buildUrl = (params = {}) => {
    const { resolution, year, month, day } = { ...this.props, ...params };

    return `/${resolution}/${year}/${month + 1}/${day}`;
  }
}
