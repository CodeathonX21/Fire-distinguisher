import React, { Fragment, useEffect, useState } from "react";

import SelfTest from "../components/SelfTest";
import BurnoutQuiz from "../components/BurnoutQuiz";


const QuizzesPage = () => {
    

    return (
        <Fragment>
            <h1 className="mt-5">Self Assesment</h1>

            <p className="mt-3 mb-2">In this section, there is a burnout assessment for you to gauge if you are experiencing any symptoms of burnout. There is also a quiz to test how much you actually know about burnout.</p>

            <div class="row mt-4 mb-2">
                <div class="col-3">
                    <div class="list-group" id="list-tab" role="tablist">
                        <a class="list-group-item list-group-item-action active" id="list-selfAssess-list" data-toggle="list" href="#list-selfAssess" role="tab" aria-controls="home">Burnout Assessment</a>
                        <a class="list-group-item list-group-item-action" id="list-burnoutQuiz-list" data-toggle="list" href="#list-burnoutQuiz" role="tab" aria-controls="profile">Burnout Quiz</a>
                    </div>
                </div>
                <div class="col-9">
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="list-selfAssess" role="tabpanel" aria-labelledby="list-selfAssess-list">
                            <SelfTest/>
                        </div>
                        <div class="tab-pane fade" id="list-burnoutQuiz" role="tabpanel" aria-labelledby="list-burnoutQuiz-list">
                            <BurnoutQuiz/>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    );    
}

export default QuizzesPage;