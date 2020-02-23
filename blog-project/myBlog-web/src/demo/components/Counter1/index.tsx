import React, { Component } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import * as types from "../../store/action-types";
import { CombinedState } from "../../store/reducers";
import { Counter1State } from "../../store/reducers/counter1";
import { LocationDescriptorObject, LocationState } from 'history'
import { push } from 'connected-react-router'

let mapStateToProps = (state: CombinedState): Counter1State => state.counter1;
let mapDispatchToProps = (dispatch: Dispatch) => ({
  add1(amount: number) {
    dispatch({ type: types.ADD1, payload: amount });
  },
  goto(location: LocationDescriptorObject<LocationState>){
    dispatch(push(location))
  }
});

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

class Counter1 extends Component<Props> {
  render() {
    return (
      <div> 
        <p>{this.props.number}</p>
        <button onClick={() => this.props.add1(5)}>加5</button>
        <button onClick={() => this.props.goto({pathname:'/counter2'})}>跳转到/counter2</button>
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter1);
