import React, { Fragment } from "react";

const TopNavBar = () => {

  return (
    <Fragment>
        <nav class="navbar navbar-light navbar-color-custom-purple ms-3 me-3">
          <a class="navbar-brand" href="#">
            <img src="/fireDistinguisher.svg" width="30" height="30" class="d-inline-block align-top" alt=""/>
            &#160;Fire Distinguisher
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link active" href="/home">Home <span class="sr-only">(current)</span></a>
              <a class="nav-item nav-link" href="/about">About</a>
            </div>
          </div>
        </nav>
    </Fragment>
  );
};

export default TopNavBar;
