import { action } from "typesafe-actions";
import uuid from "uuid/v1";
import { DictionaryATs, IForm } from "./types";

export const create = (payload: IForm) =>
  action(DictionaryATs.CREATE, { id: uuid(), ...payload });

export const update = (payload: { id: string; values: IForm }) =>
  action(DictionaryATs.UPDATE, { id: payload.id, ...payload.values });

export const remove = (id: string) => action(DictionaryATs.DELETE, id);

export const activate = (id: string) => action(DictionaryATs.ACTIVE, id);
