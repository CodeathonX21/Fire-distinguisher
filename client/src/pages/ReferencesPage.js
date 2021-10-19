import React, { Fragment, useEffect, useState } from "react";


const ReferencesPage = () => {
    return (
        <Fragment>
            <h1 className="mt-5">References and Citations</h1>

            <h3 className="mt-3 mb-2">Websites referenced</h3>

            <p>As the creator of the website is not a mental health professional, here are the websites referenced for the topic of burnout symptoms and cures.</p>

            <h4 className="mt-3 mb-2">On Burnout</h4>
            <div class="list-group">
                <a href="https://www.helpguide.org/articles/stress/burnout-prevention-and-recovery.htm" class="list-group-item list-group-item-action">[HelpGuide.org] Burnout Prevention and Treatment</a>
                <a href="https://www.forbes.com/sites/learnvest/2013/04/01/10-signs-youre-burning-out-and-what-to-do-about-it/?sh=72979d76625b" class="list-group-item list-group-item-action">[Forbes] 10 Signs You're Burning Out -- And What To Do About It</a>
                <a href="https://www.verywellmind.com/stress-and-burnout-symptoms-and-causes-3144516" class="list-group-item list-group-item-action">[verywellmind] Burnout Symptoms and Treatment</a>
                <a href="https://www.webmd.com/balance/ss/slideshow-signs-burnout" class="list-group-item list-group-item-action">[WebMD] Signs You're Burned Out</a>
            </div>

            <h4 className="mt-3 mb-2">For website design</h4>
            <div class="list-group">
                <a href="https://getbootstrap.com/docs/4.0/getting-started/introduction/" class="list-group-item list-group-item-action">Bootstrap documentation</a>
                <a href="https://reactjs.org/docs/getting-started.html" class="list-group-item list-group-item-action">React Documentation</a>
            </div>

        </Fragment>
    );    
}

export default ReferencesPage;