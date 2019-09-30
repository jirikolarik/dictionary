import { push } from "connected-react-router";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useStyletron } from "styletron-react";
import { create } from "../actions";
import { IForm } from "../types";
import Form from "./form";

const New: FC = () => {
  const dispatch = useDispatch();
  const [css] = useStyletron();
  const wrapper = css({
    margin: "0 0 0 1rem"
  });

  const onSubmit = (values: IForm) => {
    dispatch(create(values));
    dispatch(push("/"));
  };

  return (
    <div className={wrapper}>
      <h1>New dictionary</h1>
      <Form onSubmit={onSubmit} />
    </div>
  );
};

export default New;
