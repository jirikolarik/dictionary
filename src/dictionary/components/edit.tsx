import { push } from "connected-react-router";
import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router";
import { useStyletron } from "styletron-react";
import { IState } from "../../types";
import { update } from "../actions";
import { IForm } from "../types";
import Form from "./form";

const Edit: FC<
  RouteComponentProps<{
    id: string;
  }>
> = props => {
  const dispatch = useDispatch();
  const { dictionary } = useSelector((state: IState) => ({
    dictionary: state.dictionary.data[props.match.params.id]
  }));
  const [css] = useStyletron();
  const wrapper = css({
    margin: "0 0 0 1rem"
  });

  const onSubmit = (values: IForm) => {
    dispatch(update({ id: props.match.params.id, values }));
    dispatch(push("/"));
  };

  const initialValues = {
    name: dictionary.name,
    entries: Object.keys(dictionary.entries).map(key => ({
      from: key,
      to: dictionary.entries[key]
    }))
  };

  return (
    <div className={wrapper}>
      <h1>Edit dictionary</h1>
      <Form onSubmit={onSubmit} initialValues={initialValues} />
    </div>
  );
};

export default Edit;
