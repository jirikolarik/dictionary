import { Button } from "baseui/button";
import { Check, ChevronRight, Delete } from "baseui/icon";
import { ListItem, ListItemLabel } from "baseui/list";
import { push } from "connected-react-router";
import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useStyletron } from "styletron-react";
import { IState } from "../../types";
import { activate, remove } from "../actions";

const List: FC = () => {
  const { active, dictionaries, ids } = useSelector((state: IState) => ({
    active: state.dictionary.active,
    dictionaries: state.dictionary.data,
    ids: state.dictionary.ids
  }));

  const dispatch = useDispatch();
  const editDictionary = (id: string) =>
    dispatch(push(`/dictionary/edit/${id}`));
  const setActiveDicitionary = (id: string) => dispatch(activate(id));
  const removeDictionary = (id: string) => dispatch(remove(id));
  const [css] = useStyletron();
  const wrapper = css({
    width: "300px",
    margin: "0 0 0 1rem"
  });

  return (
    <div className={wrapper}>
      {ids.map(id => (
        <ListItem
          endEnhancer={() => (
            <>
              {id !== active && (
                <>
                  <Button
                    shape="round"
                    size="compact"
                    kind="primary"
                    onClick={() => setActiveDicitionary(id)}
                  >
                    <Check />
                  </Button>
                  <Button
                    shape="round"
                    size="compact"
                    onClick={() => removeDictionary(id)}
                  >
                    <Delete />
                  </Button>
                </>
              )}
              <Button
                shape="round"
                size="compact"
                kind="secondary"
                onClick={() => editDictionary(id)}
              >
                <ChevronRight />
              </Button>
            </>
          )}
        >
          <ListItemLabel>{dictionaries[id].name}</ListItemLabel>
        </ListItem>
      ))}
    </div>
  );
};

export default List;
