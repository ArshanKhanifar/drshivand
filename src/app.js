import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import SiteNavbar from "./components/site_navbar.js";
import {WebsiteRoutes} from "./pages/routes.js";
import {Home} from "./pages/home.js";


export default function App() {
  return (
    <div className={"drshivand-app"}>
      <Router>
        <div>
          <SiteNavbar/>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            {
              WebsiteRoutes.map(RouteComponent =>(
                <Route path={RouteComponent.route} key={RouteComponent.route}>
                  <RouteComponent />
                </Route>
              ))
            }
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

