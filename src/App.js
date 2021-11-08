import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
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
          <Routes>
            <Route path="/home" element={ <HomePage />} />
            <Route path="/about" element={ <AboutPage /> }/>
            <Route path="/quizzes" element={ <QuizzesPage/> }/>
            <Route path="/resources" element={ <ResourcesPage /> }/>
            <Route path="/references" element={ <ReferencesPage /> }/>
            <Route path="/learning" element={ <LearningPage /> }/>
            <Route exact path="/" element={ <HomePage /> }/>
            <Route path="*" exact={true} element={ <NotFoundPage /> }/>
          </Routes>
        </div>
      {/* </Router> */}
      </div>
    </Fragment>
    
  );
}

export default App;
