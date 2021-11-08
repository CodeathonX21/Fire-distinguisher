import React, { Fragment, useEffect, useState } from "react";

/*
References:
https://getbootstrap.com/docs/4.0/components/list-group/#javascript-behavior

*/


const ResourcesPage = () => {
    return (
        <Fragment>
            <h1 className="mt-5">Resources</h1>

            <h3 className="mt-3 mb-2">Suggested solutions</h3>

            <p>In this section are a few suggested solutions to burnout for you to try.</p>
            
            <div class="row mt-4 mb-2">
                <div class="col-4">
                    <div class="card text-white bg-info mb-3">
                        <div class="card-header">Medium</div>
                        <div class="card-body">
                            <h5 class="card-title">Organize your time</h5>
                            <p class="card-text">This is especially helpful for those who struggle with keeping up with deadlines, or with separating their work time from their personal time.</p>
                        </div>
                    </div> 

                    <div class="card bg-light mb-3">
                        <div class="card-header">Easy</div>
                        <div class="card-body">
                            <h5 class="card-title">Unplug</h5>
                            <p class="card-text">Schedule some time to put down your hone and take some time away from social media for a while and focus on your own relaxation.</p>
                        </div>
                    </div> 
                </div>

                <div class="col-4">
                    <div class="card text-white bg-dark mb-3">
                        <div class="card-header">Hard</div>
                        <div class="card-body">
                            <h5 class="card-title">Find a new hobby</h5>
                            <p class="card-text">While this may take a lot of time and effort, it is important to have hobbies; things you can associate your time with outside your work life.</p>
                        </div>
                    </div> 

                    <div class="card text-white bg-info mb-3">
                        <div class="card-header">Medium</div>
                        <div class="card-body">
                            <h5 class="card-title">Get plenty of sleep</h5>
                            <p class="card-text">With the pressures of deadlines keeping to a sleep schedule may be tough, but it is still very important to maintaing good mental health.</p>
                        </div>
                    </div> 
                </div>
            </div>
            
            <h3 className="mt-3 mb-2">Further reading</h3>

            <p>In this section are a few book reccomendation to read to help combat burnout.</p>

            <p> -- under construction -- </p>

            <h3 className="mt-3 mb-2">Helplines</h3>

            <p>If you are in serious distress, do not hesitate to contact someone for help. Here are some helplines you might find useful.</p>
            <p> -- under construction -- </p>
        </Fragment>
    );    
}

export default ResourcesPage;