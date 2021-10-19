import React, { Fragment, useEffect, useState } from "react";

/*
References:
https://getbootstrap.com/docs/4.0/components/list-group/#javascript-behavior

*/


const LearningPage = () => {
    return (
        <Fragment>
            <h1 className="mt-5">Learning about burnout</h1>

            <p>Explore some of the common causes of burnout and see how they could affect your life.</p>

            <h4>Stress from deadlines</h4>

            <p>Sometimes when you have too many deadlines to meet and no time to meet them all, it can be hard to get started working on anything.</p>

            <h4>Peer presure to perform</h4>

            <p>Seeing other people being over achievers makes you feel like you should be doing as much work to catch up with them</p>

            <h4>Strict pandemic measures</h4>

            <p>The safe distancing measures from the pandemic have left many feeling isolated. Strict pandemic measures have reduced meetups with friends and family. Extroverts are especially affected by the lack of social contact during this time period.</p>

            <h4>Poor time management</h4>

            <p>With many people working from home, some struggle to manage and separate their personal time and work time.</p>

            <h4>Disorganization</h4>

            <p>A messy environment can be unconducive to getting things done. Disorganization can lead to stagnation.</p>

            <h4>Lack of control</h4>

            <p>During the pandemic, many feel that they have a lack of control over their lives. From the rapidly changing unpredictable situation to a lack of certainty of job security. All of these factors can be potential causes of burnout.</p>

            

        </Fragment>
    );    
}

export default LearningPage;