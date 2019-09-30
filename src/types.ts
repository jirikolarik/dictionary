import { RouterAction, RouterState } from "connected-react-router";
import { Dispatch as ReduxDispatch } from "redux";
import { ActionType as AT } from "typesafe-actions";
import * as dictionaryActions from "./dictionary/actions";
import { IDictionaryState } from "./dictionary/types";
import { IProductState } from "./product/types";

export interface IState {
  readonly dictionary: IDictionaryState;
  readonly product: IProductState;
  readonly router: RouterState;
}

export type ActionType = AT<typeof dictionaryActions> | RouterAction;

export type Dispatch = ReduxDispatch<ActionType>;
