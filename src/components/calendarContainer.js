import moment from "moment";

import applyHOCs from "../helpers/applyHOCs";
import withProps from "../hocs/withProps";
import withRedirect from "../hocs/withRedirect";

import Calendar from "./calendar";

const getRouteParams = (props) => {
  const { year, month: humanMonth, day, resolution } = props.match.params;

  return {
    resolution,
    year: Number(year),
    month: Number(humanMonth) - 1, // Jan === 0
    day: Number(day),
  };
}

function buildUrl() {
  const resolution = "month";
  const [year, monthIndex, day] = moment().toArray();

  return `/${resolution}/${year}/${monthIndex + 1}/${day}`;
}

function isInvalidDate(props) {
  const { year, month, day } = props;
  const momentized = moment([year, month, day]);

  return !momentized.isValid();
}

export default applyHOCs(
  withProps(getRouteParams),
  withRedirect(isInvalidDate, buildUrl),
)(Calendar)
