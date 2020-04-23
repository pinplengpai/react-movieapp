import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => { //which it's the view (homepage)
  const {currentUser} = useContext(AuthContext); //will return value which will pass the provider 
  return (
    <Route
      {...rest}
      render={routeProps =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/login"} /> //if it's not the currentuser then rediret to login 
        )
      }
    />
  );
};


export default PrivateRoute

