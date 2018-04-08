import React, { Component } from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as scene from "./scene";

function PrivateRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authed === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

function PublicRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authed === false ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

export default class RouterApp extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={this.props.store}>
          <Switch>
            <Route exact path="/" component={scene.HomePage} />
          </Switch>
        </Provider>
      </BrowserRouter>
    );
  }
}
