import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import './App.css';

// import pages
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import AboutPage from "./pages/AboutPage";
import TopNavBar from "./components/TopNavBar";
import SelfAssessPage from "./pages/SelfAssessPage";
import ResourcesPage from "./pages/ResourcesPage";
import ReferencesPage from "./pages/ReferencesPage";

function App() {
  return (
    <Fragment>
      <TopNavBar/>
      <div className="container">
        <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/selfAssessment">
              <SelfAssessPage/>
            </Route>
            <Route path="/resources">
              <ResourcesPage />
            </Route>
            <Route path="/references">
              <ReferencesPage />
            </Route>
            <Route path="/">
              <NotFoundPage />
            </Route>
          </Switch>
        </div>
      </Router>
      </div>
    </Fragment>
    
  );
}

export default App;
