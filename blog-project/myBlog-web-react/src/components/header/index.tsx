import React, { Component } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import "./index.scss";
import * as types from "@/store/action-types";
import { IBlogState } from "@/store/reducers/blogState";
import { CombinedState } from "@/store/reducers/index";
import LogoWhite from "../../assets/img/logo_white.png";

let mapStateToProps = (state: CombinedState): IBlogState => state.blogState;
let mapDispatchToProps = (dispatch: Dispatch) => ({
  changeMenuState() {
    dispatch({ type: types.SHOW_MAIN_MENU });
  }
});

interface ImainHeader {
  clockTime: string;
  clockSeconds: string | number;
  clockWeek: string;
  clockDayTime: string;
}

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

class MainHeader extends Component<Props> {
  public state: ImainHeader = {
    clockTime: "",
    clockSeconds: "",
    clockWeek: "",
    clockDayTime: ""
  };

  private timer?: any;

  componentDidMount() {
    this.timer = setInterval(() => this.getCurrentTime(), 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  getCurrentTime() {
    // 计算时分秒
    const time = new Date();
    let hours: number | string = time.getHours();
    if (hours < 10) {
      hours = "0" + hours;
    }
    let minutes: number | string = time.getMinutes();
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    let seconds: number | string = time.getSeconds();
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    // 计算年月日
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let date = new Date().getDate();
    this.setState({
      clockTime: `${hours}：${minutes}`,
      clockSeconds: seconds,
      clockDayTime: `${year}年${month}月${date}日`
    });
  }

  render() {
    return (
      <>
        <header className="main-header-wrap">
          <div className="header-topbar-left">
            <button
              className="menu-btn"
              type="button"
              onClick={() => this.props.changeMenuState()}
            >
              <div title="打开菜单">
                <span className="iconfont">&#xe605;</span>
              </div>
            </button>
            <div className="logo-container">
              <img draggable="false" src={LogoWhite} alt="logo" />
            </div>
          </div>
          <div className="header-topbar-right">
            <div className="week-time">{this.state.clockDayTime}</div>
            <div className="hour-min">
              {this.state.clockTime}
              <span>{this.state.clockSeconds}</span>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);
