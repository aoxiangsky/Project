import {
  createStore,
  applyMiddleware,
  StoreEnhancer,
  StoreEnhancerStoreCreator,
  Store
} from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
import { routerMiddleware } from "connected-react-router";
import history from "../history";
let storeEnhancer: StoreEnhancer = applyMiddleware(thunk);
let StoreEnhancerStoreCreatorFunc: StoreEnhancerStoreCreator = storeEnhancer(
  createStore
);
let store: Store = StoreEnhancerStoreCreatorFunc(reducer);
export default store;
