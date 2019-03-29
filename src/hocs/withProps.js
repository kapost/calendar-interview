import React from "react";

export default function withProps(getProps) {
  return (Component) => {
    function WrappedComponent(props) {
      return <Component {...props} {...getProps(props)} />
    }

    return WrappedComponent;
  };
}
