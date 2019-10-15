import React from "react";
import { Route, NavLink, withRouter, Redirect } from "react-router-dom";
import Login from "./Login";
import Friends from "./Friends";

export function Container(props) {
  // const onLogout = () => {

  //   localStorage.clear();

  //   props.history.replace("/");
  // };

  return (
    <div className="container">
      <nav>
        <span>
          <NavLink exact to="/">
            Login
          </NavLink>
          <NavLink to="/friends">Friends</NavLink>
        </span>
      </nav>

      <main>
        <Route exact path="/" component={Login} />
        <Route
          exact
          path="/friends"
          render={props => withAuthCheck(Friends, props)}
        />
      </main>
    </div>
  );
}

export function withAuthCheck(Component, props) {
  if (localStorage.getItem("token")) {
    return <Component {...props} />;
  }
  return <Redirect to="/" />;
}

export default withRouter(Container);
