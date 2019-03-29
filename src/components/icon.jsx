import React from "react";
import { string } from "prop-types";

export default function Icon({ name, className = "" }) {
  return <span className={className}><i className={`fas fa-${name}`}/></span>
}

Icon.propTypes = {
  name: string.isRequired,
  className: string,
}
