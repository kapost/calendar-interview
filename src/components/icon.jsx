import React from "react";
import { string } from "prop-types";

export default function Icon({ name, className = "", solid = true }) {
  const prefix = solid ? "fas" : "far";
  return <span className={className}><i className={`${prefix} fa-${name}`}/></span>
}

Icon.propTypes = {
  name: string.isRequired,
  className: string,
}
