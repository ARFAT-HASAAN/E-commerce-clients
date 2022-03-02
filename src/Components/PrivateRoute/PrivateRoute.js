import React from "react";
import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";
import UseAuth from "../../context/UseAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = UseAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/regester",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
