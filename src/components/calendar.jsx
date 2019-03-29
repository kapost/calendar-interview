import React from "react";

import { calendarComponent, headerWrapper, viewWrapper, contextPanelWrapper, bodyWrapper } from "../styles/calendar.module.css";


export default class Calendar extends React.Component {
  render() {
    return (
      <div className={calendarComponent}>
        <div className={headerWrapper} />
        <div className={bodyWrapper}>
          <div className={viewWrapper} />
          <div className={contextPanelWrapper} />
        </div>
      </div>
    );
  }
}
