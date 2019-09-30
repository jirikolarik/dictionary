import { fieldHasDuplicate, fieldRequired } from "./validations";

describe("Dictionary/validation", () => {
  it("has a required field", () => {
    expect(
      fieldRequired({ name: undefined }, "name", "Field required")
    ).toEqual({ name: "Field required" });
  });

  it("doesnt have a required field", () => {
    expect(fieldRequired({ name: "John" }, "name", "Field required")).toEqual(
      {}
    );
  });

  it("finds a duplicate", () => {
    expect(
      fieldHasDuplicate(
        { name: "John" },
        "name",
        ["John", "John"],
        "Field is taken"
      )
    ).toEqual({ name: "Field is taken" });
  });

  it("doesnt find a duplicate", () => {
    expect(
      fieldHasDuplicate(
        { name: "John" },
        "name",
        ["John", "Doe"],
        "Field is taken"
      )
    ).toEqual({});
  });
});
