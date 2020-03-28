import React from 'react';
import {Route,Redirect,Switch} from "react-router-dom"
import './App.scss';
import MainHeader from './components/header/index';
import MainSideNavBar from './components/sideNav/index'
import AoXiangBlog from "./views/blog"
import Resume from "./views/resume"
import Home from "./views/home"
import FunnyShow from "./views/funnyShow"

const App: React.FC = () => {
  return (
    <div id="App">
      <MainHeader/>
      <MainSideNavBar/>
      <main className="content-main">
        <Switch>
          <Route path="/aoxianghome" component={Home}/>
          <Route path="/aoxiangblog" component={AoXiangBlog}/>
          <Route path="/aoxiangresume" component={Resume} />
          <Route path="/aoxiangfunnyshow" component={FunnyShow} />
          <Redirect to="/aoxiangblog" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
