import React, { Fragment } from "react";

const TopNavBar = () => {

  return (
        <nav class="navbar sticky-top navbar-expand-lg navbar-light navbar-color-custom-purple" >
          <a class="navbar-brand" href="/home">
            <img src={process.env.PUBLIC_URL + "/transparentLogo.svg"} width="30" height="30" class="d-inline-block ms-3 align-top" alt=""/>
            &#160;Fire Distinguisher
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active ">
                <a class="nav-link" href="/home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-item nav-link" href="/about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-item nav-link" href="/learning">Learning</a>
              </li>
              <li class="nav-item">
                <a class="nav-item nav-link" href="/quizzes">Quizzes</a>
              </li>
              <li class="nav-item">
                <a class="nav-item nav-link" href="/resources">Resources</a>
              </li>
              <li class="nav-item">
                <a class="nav-item nav-link" href="/references">References</a>
              </li>
            </ul>
          </div>
        </nav>
  );
};

export default TopNavBar;
