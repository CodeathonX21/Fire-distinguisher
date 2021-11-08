import React, { Fragment } from "react";
import {
  HashRouter,
  Switch,
  Route,
  Routes,
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
import QuizzesPage from "./pages/QuizzesPage";
import ResourcesPage from "./pages/ResourcesPage";
import ReferencesPage from "./pages/ReferencesPage";
import LearningPage from "./pages/LearningPage";
 
function App() {
  return (
    <Fragment>
      <TopNavBar/>
      <div className="container">
        {/* <Router> */}
        <div>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <HashRouter>
            <Route path={process.env.PUBLIC_URL + "/#home"} element={ <HomePage />} />
            <Route path={process.env.PUBLIC_URL + "/#about"} element={ <AboutPage /> }/>
            <Route path={process.env.PUBLIC_URL + "/#quizzes"} element={ <QuizzesPage/> }/>
            <Route path={process.env.PUBLIC_URL + "/#resources"} element={ <ResourcesPage /> }/>
            <Route path={process.env.PUBLIC_URL + "/#references"} element={ <ReferencesPage /> }/>
            <Route path={process.env.PUBLIC_URL + "/#learning"} element={ <LearningPage /> }/>
            <Route exact path="/" element={ <HomePage /> }/>
            <Route path="*" element={ <NotFoundPage /> }/>
          </HashRouter>
        </div>
      {/* </Router> */}
      </div>
    </Fragment>
    
  );
}

export default App;
