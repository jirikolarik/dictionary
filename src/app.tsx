import React, { FC } from "react";
import { Route, RouteComponentProps, Switch, withRouter } from "react-router";
import { useStyletron } from "styletron-react";
import DictionaryEdit from "./dictionary/components/edit";
import DictionaryNew from "./dictionary/components/new";
import ProductIndex from "./product/screens";

const App: FC<RouteComponentProps> = () => {
  const [css] = useStyletron();
  const layout = css({
    margin: "auto",
    width: "960px",
    padding: "1rem"
  });

  return (
    <div className={layout}>
      <Switch>
        <Route exact={true} path="/" component={ProductIndex} />
        <Route exact={true} path="/dictionary/new" component={DictionaryNew} />
        <Route
          exact={true}
          path="/dictionary/edit/:id"
          component={DictionaryEdit}
        />
      </Switch>
    </div>
  );
};

export default withRouter(App);
