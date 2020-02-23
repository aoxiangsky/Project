import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./reset.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./demo/store";

import { ConnectedRouter } from 'connected-react-router'
import { Route, Link, Redirect, Switch } from 'react-router-dom'
import history from './history';
import Counter1 from "./demo/components/Counter1/index";
import Counter2 from "./demo/components/Counter2/index";
import User from './demo/components/User/index'
import NavBar from "./demo/components/NavBar/index"

import "antd/dist/antd.css"
import { Layout } from 'antd'
let { Content } = Layout

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Layout>
        <NavBar />
        <Content style={{padding:'20px'}}>
          <Switch>
            <Route path="/counter1" component={Counter1} />
            <Route path="/counter2" component={Counter2} />
            <Route path="/User" component={User} />
            <Redirect to="/counter1" />
          </Switch>
        </Content>
      </Layout>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
