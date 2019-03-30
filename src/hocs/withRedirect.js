import React from "react";
import { Redirect } from "react-router-dom";

export default function withRedirect(shouldRedirect, buildUrl) {
  return (Component) => {
    function WrappedComponent(props) {
      if (shouldRedirect(props)) {
        return <Redirect to={buildUrl(props)} />;
      }

      return <Component {...props} />;
    }

    return WrappedComponent;
  };
}
