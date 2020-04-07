import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "./components/Layout";
import Main from "./components/Pages/Main/Main";
import Posts from "./components/Pages/Posts/Posts";
import Images from "./components/Pages/Images/Images";
import Contacts from "./components/Pages/Contacts/Contacts";

export const Routes = () => (
  <Router>
    <Switch>
      <Layout>
        <Route exact path="/" component={Main} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/images" component={Images} />
        <Route exact path="/contacts" component={Contacts} />
      </Layout>
    </Switch>
  </Router>
);
