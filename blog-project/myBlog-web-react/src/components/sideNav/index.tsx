import React, { Component } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import "./index.scss";
import * as types from "@/store/action-types";
import { IBlogState } from "@/store/reducers/blogState";
import { CombinedState } from "@/store/reducers/index";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import LogoNote from "../../assets/img/logo_note.png";

let mapStateToProps = (state: CombinedState): IBlogState => state.blogState;

let mapDispatchToProps = (dispatch: Dispatch) => ({
  changeMenuState() {
    dispatch({ type: types.SHOW_MAIN_MENU });
  }
});

type Props = RouteComponentProps &
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

class SideNavBar extends Component<Props> {
  render() {
    return (
      <>
        <div
          className={`sidenav-mask ${
            this.props.menuState ? "sidenav-mask_active" : null
          }`}
          onClick={() => this.props.changeMenuState()}
        ></div>
        <div
          className={`sidenav-bar-wrap ${
            this.props.menuState ? "sidenav-bar-wrap_active" : null
          }`}
        >
          <div className="logo">
            <img
              className="logo-title"
              src={Logo}
              alt="logo"
              draggable="false"
            />
            <img className="logo-note" src={LogoNote} draggable="false" alt="#" />
          </div>
          <ul className="main-menu-wrap">
            <Link to="aoxianghome" onClick={() => this.props.changeMenuState()}>
              <li>
                <span className="iconfont menu-logo">&#xe75f;</span>
                <span className="menu-name">Home Page</span>
              </li>
            </Link>
            <Link to="aoxiangblog" onClick={() => this.props.changeMenuState()}>
              <li>
                <span className="iconfont menu-logo">&#xe603;</span>
                <span className="menu-name">Blog</span>
              </li>
            </Link> 
            <Link to="aoxiangresume" onClick={() => this.props.changeMenuState()}>
              <li>
                <span className="iconfont menu-logo">&#xe606;</span>
                <span className="menu-name">Resume</span>
              </li>
            </Link>
            <Link to="aoxiangfunnyshow" onClick={() => this.props.changeMenuState()}>
              <li>
                <span className="iconfont menu-logo">&#xe610;</span>
                <span className="menu-name">Funny Show</span>
              </li>
            </Link>
          </ul>
        </div>
      </>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SideNavBar)
);
