import { Reducer } from "redux";
import { ActionType } from "../types";
import { IProductState } from "./types";

export const initialState: IProductState = {
  data: {
    "apple-iphone-6s": {
      color: "Anthracite",
      name: "Apple iPhone 6s",
      price: 769
    },
    "samsung-galaxy-s8": {
      color: "Midnight Black",
      name: "Samsung Galaxy S8",
      price: 569
    },
    "huawei-p9": {
      color: "Mystic Silver",
      name: "Huawei P9",
      price: 272
    }
  },
  ids: ["apple-iphone-6s", "samsung-galaxy-s8", "huawei-p9"]
};

const reducer: Reducer<IProductState, ActionType> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default reducer;
