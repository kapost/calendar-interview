import React from "react";
import { number, object } from "prop-types";

import { monthViewComponent } from "../styles/monthView.module.css";

export default class MonthView extends React.Component {
  static propTypes = {
    momentizedDate: object.isRequired, // TODO: shape
    year: number.isRequired,
    month: number.isRequired,
  };

  render() {
    return (
      <div className={monthViewComponent}>
      </div>
    );
  }
}
