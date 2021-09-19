import React from "react";
import Home from "../Home/Home";
import { Switch, Route } from "react-router-dom";
import SingleCarDetail from "../CarDetail/SingleCarDetail";
import Footer from "../Footer/Footer";
import Navbar from "../Home/Navbar";

const Routes = () => {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:collision_id">
          <SingleCarDetail />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default Routes;
