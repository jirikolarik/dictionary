import { mount } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { initialState as dictionaryInitialState } from "../../dictionary/reducer";
import { initialState as productInitialState } from "../reducer";
import Table from "./table";

const mockStore = configureMockStore();

describe("Table", () => {
  it("should rename all entries", () => {
    const store = mockStore({
      dictionary: dictionaryInitialState,
      product: productInitialState
    });

    const wrapper = mount(
      <Provider store={store}>
        <Table />
      </Provider>
    );

    const text = wrapper.text();
    expect(wrapper.html()).toMatchSnapshot();
    expect(text).toContain("Name");
    expect(text).toContain("Color");
    expect(text).toContain("Price");
    expect(text).toContain("Apple iPhone 6s");
    expect(text).toContain("Dark Grey");
    expect(text).toContain("769");
    expect(text).toContain("Samsung Galaxy S8");
    expect(text).toContain("Black");
    expect(text).toContain("569");
    expect(text).toContain("Huawei P9");
    expect(text).toContain("Silver");
    expect(text).toContain("272");
  });
});
