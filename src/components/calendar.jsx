import React from "react";
import moment from "moment";

import Header from "./header";

import { calendarComponent, headerWrapper, viewWrapper, contextPanelWrapper, bodyWrapper } from "../styles/calendar.module.css";


export default class Calendar extends React.Component {
  render() {
    const { resolution } = this.getRouteParams();

    return (
      <div className={calendarComponent}>
        <div className={headerWrapper}>
          <Header resolution={resolution} momentizedDate={this.getMomentizedDate()} />
        </div>
        <div className={bodyWrapper}>
          <div className={viewWrapper} />
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
  }
}
