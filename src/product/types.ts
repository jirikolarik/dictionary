export interface IProduct {
  color: string;
  name: string;
  price: number;
}

export interface IProductState {
  data: {
    [key: string]: IProduct;
  };
  ids: string[];
}
