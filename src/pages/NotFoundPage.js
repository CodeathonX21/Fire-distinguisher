import React, { Fragment } from "react";

const NotFoundPage = () => {
    return (
        <Fragment>
            <h3 className="mt-5">404 Not Found!</h3>
            <p>Error page not found!</p>

            <a class="btn btn-primary" href={process.env.PUBLIC_URL + "/#home"} role="button">Back to home</a>
        </Fragment>
    );    
}

export default NotFoundPage;