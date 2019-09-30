import { findIndex, findLastIndex } from "ramda";
import { IFormInput } from "./types";

export function fieldRequired<T>(
  obj: T,
  key: keyof T,
  message = "Field is required"
) {
  return obj[key] === undefined ? { [key]: message } : {};
}

export function fieldHasDuplicate<T>(
  obj: T,
  key: keyof T,
  inArray: Array<string | undefined>,
  message = "This name is already in use"
) {
  return findIndex(a => a === obj[key])(inArray) !==
    findLastIndex(a => a === obj[key])(inArray)
    ? { [key]: message }
    : {};
}

export function validate(v: IFormInput) {
  const allKeys = (v.entries || []).map(e => e.from);
  return {
    ...fieldRequired(v, "name"),
    entries: (v.entries || []).map(e => ({
      ...fieldRequired(e, "from"),
      ...fieldRequired(e, "to"),
      ...fieldHasDuplicate(e, "from", allKeys)
    }))
  };
}
