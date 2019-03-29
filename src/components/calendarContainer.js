import applyHOCs from "../helpers/applyHOCs";
import withProps from "../hocs/withProps";

import Calendar from "./calendar";

const getRouteParams = (props) => {
  const { year, month, day, resolution } = props.match.params;

  return {
    resolution,
    year: Number(year),
    month: Number(month),
    day: Number(day),
  };
}

export default applyHOCs(
  withProps(getRouteParams),
)(Calendar)
