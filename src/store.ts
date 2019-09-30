import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { applyMiddleware, combineReducers, createStore, Reducer } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import * as reducers from "./reducers";
import { ActionType, IState } from "./types";

export const history = createBrowserHistory();

export const reducer: Reducer<IState, ActionType> = combineReducers({
  router: connectRouter(history),
  ...reducers
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(routerMiddleware(history)))
);

export default store;
