import { Table as BaseTable } from "baseui/table";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { IState } from "../../types";

const Table: FC = () => {
  const { dictionary, products, ids } = useSelector((state: IState) => ({
    dictionary: state.dictionary.data[state.dictionary.active],
    products: state.product.data,
    ids: state.product.ids
  }));

  const entries = ids.map(id => [
    products[id].name,
    dictionary.entries[products[id].color],
    products[id].price.toLocaleString(undefined, {
      currency: "CHF",
      style: "currency"
    })
  ]);
  return <BaseTable columns={["Name", "Color", "Price"]} data={entries} />;
};

export default Table;
