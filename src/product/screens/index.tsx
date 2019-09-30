import { Button } from "baseui/button";
import { push } from "connected-react-router";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useStyletron } from "styletron-react";
import List from "../../dictionary/components/list";
import Table from "../components/table";

const ProductIndex: FC = () => {
  const [css] = useStyletron();
  const dispatch = useDispatch();
  const addDictionary = () => dispatch(push("/dictionary/new"));

  return (
    <>
      <h1>Products</h1>
      <div
        className={css({
          display: "flex"
        })}
      >
        <div
          className={css({
            flexGrow: 1
          })}
        >
          <Table />
        </div>
        <div>
          <List />
          <div
            className={css({
              marginTop: "1rem",
              textAlign: "right"
            })}
          >
            <Button onClick={addDictionary}>Add new dictionary</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductIndex;
