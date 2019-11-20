import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

import App from '@/App'
import Home from '@/pages/home'

const Router = () => {
  return (
    <HashRouter>
      <App>
        <Switch>
          <Route path="/home" component={Home} />
          <Redirect to="home" />
        </Switch>
      </App>
    </HashRouter>
  )
}

export default Router
