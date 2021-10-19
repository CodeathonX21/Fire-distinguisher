import React, { Fragment } from "react";

const TopNavBar = () => {

  return (
        <nav class="navbar sticky-top navbar-expand-lg navbar-light navbar-color-custom-purple" >
          <a class="navbar-brand" href="/home">
            <img src="/transparentLogo.svg" width="30" height="30" class="d-inline-block ms-3 align-top" alt=""/>
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
            <li class="nav-item">
              <a class="nav-item nav-link" href="/references">References</a>
            </li>
            </ul>
        </nav>
  );
};

export default TopNavBar;
