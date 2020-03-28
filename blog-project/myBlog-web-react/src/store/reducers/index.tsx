import { combineReducers, ReducersMapObject, AnyAction, Reducer } from "redux";
import blogState, { IBlogState } from "./blogState";
import { connectRouter, RouterState } from "connected-react-router";
import history from "../../history";

export interface CombinedState {
  router: RouterState;
  blogState: IBlogState;
}

let reducers: ReducersMapObject<CombinedState, any> = {
  router: connectRouter(history),
  blogState
};

let reducer: Reducer<CombinedState, AnyAction> = combineReducers(reducers);

export default reducer;
