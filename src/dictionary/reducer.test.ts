import reducer from "./reducer";
import { DictionaryATs } from "./types";

describe("Reducers/Dictionary", () => {
  it("DictionaryATs.CREATE", () => {
    expect(
      reducer(undefined, {
        type: DictionaryATs.CREATE,
        payload: {
          name: "Second dictionary",
          id: "abc-123",
          entries: [{ from: "Some", to: "Another" }]
        }
      })
    ).toMatchObject({
      data: {
        "abc-123": {
          entries: { Some: "Another" },
          ids: ["Some"],
          name: "Second dictionary"
        }
      },
      ids: ["b3aa9c70-e35c-11e9-a411-516b6719292b", "abc-123"]
    });
  });

  it("DictionaryATs.UPDATE", () => {
    expect(
      reducer(undefined, {
        type: DictionaryATs.UPDATE,
        payload: {
          name: "First dictionary",
          id: "b3aa9c70-e35c-11e9-a411-516b6719292b",
          entries: [
            { from: "Some", to: "And another" },
            { from: "Second", to: "One" }
          ]
        }
      })
    ).toMatchObject({
      data: {
        "b3aa9c70-e35c-11e9-a411-516b6719292b": {
          entries: { Some: "And another", Second: "One" },
          ids: ["Some", "Second"],
          name: "First dictionary"
        }
      },
      ids: ["b3aa9c70-e35c-11e9-a411-516b6719292b"]
    });
  });

  it("DictionaryATs.DELETE", () => {
    expect(
      reducer(undefined, {
        type: DictionaryATs.DELETE,
        payload: "b3aa9c70-e35c-11e9-a411-516b6719292b"
      })
    ).toMatchObject({
      data: {},
      ids: []
    });
  });
});
