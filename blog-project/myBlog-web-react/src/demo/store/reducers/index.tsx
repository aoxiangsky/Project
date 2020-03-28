import { combineReducers, ReducersMapObject, AnyAction, Reducer } from "redux";
import counter1, { Counter1State } from "./counter1";
import counter2, { Counter2State } from "./counter2";
import { connectRouter, RouterState } from "connected-react-router";
import history from "../../../history";

export interface CombinedState {
  counter1: Counter1State;
  counter2: Counter2State;
  router: RouterState;
}

let reducers: ReducersMapObject<CombinedState, any> = {
  counter1,
  counter2,
  router: connectRouter(history)
};

let reducer: Reducer<CombinedState, AnyAction> = combineReducers(reducers);

export default reducer;
