import React from "react";
import classNames from "classnames";
import moment from "moment";

import { gridCellComponent, thisMonthCell, todayCell } from "../styles/dateCell.module.css";

export default function DateCell({ date, month }) {
  const isThisMonth = month === date.month() + 1;

  const isToday = date.isSame(moment(), "day");

  const classes = classNames(gridCellComponent, { [thisMonthCell]: isThisMonth, [todayCell]: isToday });

  return (
    <div className={classes}>
      <span>{date.date()}</span>
    </div>
  );
}
