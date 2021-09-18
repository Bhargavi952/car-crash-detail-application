import React from "react";
import Home from "../Home/Home";
import { Switch, Route } from "react-router-dom";
import SingleCarDetail from "../CarDetail/SingleCarDetail";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:collision_id">
          <SingleCarDetail />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
