import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Rabinkarp from "pages/rabinkarp";
import Navigation from "components/navigation";
import "./index.scss";

const App = () => {
  return (
    <Fragment>
      <Navigation />
      <div className="content">
        <Switch>
          <Route exact path="/rabinkarp" component={Rabinkarp} />
        </Switch>
      </div>
    </Fragment>
  );
};

export default App;
