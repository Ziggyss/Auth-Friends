import React from "react";
import { Route, NavLink, withRouter, Redirect } from "react-router-dom";
import Login from "./Login";
import Friends from "./Friends";
import styled from "styled-components";

const StyledNav = styled.div`
display: flex;
background: lightblue;
text-decoration: none;
color: white;
justify-content: space-around;
font-size: 16px;
height: 50px;
align-items: center;
width: 800px;
margin: 0 auto;
button {
  height: 25px;
}
`;

export function Container(props) {
  const onLogout = () => {
    localStorage.clear();

    props.history.replace("/");
  };

  return (
    <div className="container">
      <nav>
        <StyledNav>
          <button exact to="/">
            Login
          </button> 
          <h1>Friends App</h1>
          <button to="/friends">Friends</button>
         
          {/* <NavLink  onClick={() => {
          onLogout(props);
        }} exact to="/">Log Out</NavLink> */}
        </StyledNav>
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
