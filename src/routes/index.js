import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Detail from "../screens/Detail";
import Home from "../screens/Home";

function Routes() {
  return (
    <Router basename={"/display"}>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route path={"/display"} component={Home} />
        <Route path={"/detail"} component={Detail} />
      </Switch>
    </Router>
  );
}

export default Routes;
