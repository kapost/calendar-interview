import React from "react";

import { headerComponent } from "../styles/header.module.css";

export default class Header extends React.Component {
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
        {this.props.momentizedDate.format("MMMM YYYY")}
      </div>
    )
  }
}
