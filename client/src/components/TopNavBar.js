import React, { Fragment } from "react";

const TopNavBar = () => {

  return (
    <Fragment>
        <nav class="navbar navbar-expand-lg navbar-light navbar-color-custom-purple ms-3 me-3">
          <a class="navbar-brand" href="/home">
            <img src="/transparentLogo.svg" width="30" height="30" class="d-inline-block align-top" alt=""/>
            &#160;Fire Distinguisher
          </a>
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-item nav-link" href="/about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-item nav-link" href="/selfAssessment">Self Assessment</a>
            </li>
            <li class="nav-item">
              <a class="nav-item nav-link" href="/resources">Resources</a>
            </li>
  
            </ul>
        </nav>
    </Fragment>
  );
};

export default TopNavBar;
