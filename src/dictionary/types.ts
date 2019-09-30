export interface IDictionary {
  name: string;
  entries: {
    [key: string]: string;
  };
  ids: string[];
}

export interface IDictionaryState {
  active: string;
  data: {
    [key: string]: IDictionary;
  };
  ids: string[];
}

export interface IFormInput {
  name?: string;
  entries?: Array<{
    from?: string;
    to?: string;
  }>;
}

export interface IForm {
  name: string;
  entries: Array<{
    from: string;
    to: string;
  }>;
}

export enum DictionaryATs {
  ACTIVE = "ACTIVE",
  CREATE = "CREATE",
  UPDATE = "UPDATE",
  DELETE = "DELETE"
}
