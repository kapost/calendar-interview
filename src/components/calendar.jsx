import React from "react";
import moment from "moment";

import MonthView from "./monthView";
import Header from "./header";

import {
  calendarComponent,
  headerWrapper,
  viewWrapper,
  sidePanelWrapper,
  bodyWrapper,
} from "../styles/calendar.module.css";

const VIEW_MAPPING = {
  month: MonthView,
};

export default class Calendar extends React.Component {
  render() {
    const { resolution, year, month, day, panelOpen, onTogglePanel } = this.props;

    const ViewComponent = VIEW_MAPPING[resolution] || MonthView;

    return (
      <div className={calendarComponent}>
        <div className={headerWrapper}>
          <Header
            year={year}
            month={month}
            day={day}
            momentizedDate={this.getMomentizedDate()}
            onChangeDate={this.handleChangeDate}
            onTogglePanel={onTogglePanel}
            panelOpen={panelOpen}
            resolution={resolution}
          />
        </div>
        <div className={bodyWrapper}>
          <div className={viewWrapper}>
            <ViewComponent
              year={year}
              month={month}
              day={day}
              momentizedDate={this.getMomentizedDate()}
            />
          </div>
          {panelOpen && <div className={sidePanelWrapper} />}
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
