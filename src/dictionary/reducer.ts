import { dissocPath, mergeAll } from "ramda";
import { Reducer } from "redux";
import { ActionType } from "../types";
import { DictionaryATs, IDictionaryState } from "./types";

const id = "b3aa9c70-e35c-11e9-a411-516b6719292b";
export const initialState: IDictionaryState = {
  active: id,
  data: {
    [id]: {
      name: "First dictionary",
      entries: {
        Anthracite: "Dark Grey",
        "Midnight Black": "Black",
        "Mystic Silver": "Silver"
      },
      ids: ["Anthracite", "Midnight Black", "Mystic Silver"]
    }
  },
  ids: [id]
};

function standardise(values: Array<{ from: string; to: string }>) {
  return mergeAll(values.map(v => ({ [v.from]: v.to })));
}

const reducer: Reducer<IDictionaryState, ActionType> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case DictionaryATs.CREATE: {
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.id]: {
            name: action.payload.name,
            entries: standardise(action.payload.entries),
            ids: action.payload.entries.map(e => e.from)
          }
        },
        ids: [...state.ids, action.payload.id]
      };
    }
    case DictionaryATs.UPDATE: {
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.id]: {
            name: action.payload.name,
            entries: standardise(action.payload.entries),
            ids: action.payload.entries.map(e => e.from)
          }
        }
      };
    }
    case DictionaryATs.DELETE: {
      return {
        ...dissocPath(["data", action.payload], state),
        ids: state.ids.filter(id => id !== action.payload)
      };
    }
    case DictionaryATs.ACTIVE: {
      return {
        ...state,
        active: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
