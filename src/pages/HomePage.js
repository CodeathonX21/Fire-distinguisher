import React, { Fragment, useEffect, useState } from "react";

const HomePage = () => {
    return (
        <Fragment>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4 mt-4">Burnout</h1>
                    <p class="lead">Feeling stressed, exhausted and disinterested in your work? You may be experiencing burnout</p>
                </div>
            </div>

            <div class="card">
                <h3 className="">What is burnout?</h3>
                <p>Burnout is when you experience consistently high levels of stress or discomfort, usually at work, resulting in a loss in interest to work, as well as a lowered productivity rate. Burnout can also have negative effects on other aspects of your health as well. It is important to be able to recognize the signs of burnout early and do what you can to protect your mental health.</p>
                <p>While burnout may seem like just a mental issue, the long term effects of burnout can be quite damaging, both to the person suffering from burnout and those around them. </p>
            </div>

            <div class="mt-4">
                <h3 className="">What are the common causes of burnout?</h3>
                <p>Learn more about the more common causes of burnout, as well as the effects burnout can have on you.</p>
                <a class="btn btn-primary" href={process.env.PUBLIC_URL + "/#learning"} role="button">Learn More</a>
            </div>

            <h3 className="mt-4">Are you experiencing burnout?</h3>
            <p>Take our self-assessment quiz to see how many symptoms of burnout you might be currently experiencing</p>
            <a class="btn btn-primary" href={process.env.PUBLIC_URL + "/#quizzes"} role="button">Take a self assessment</a>
            
            <h3 className="mt-4">Solutions to mitigate burnout</h3>
            <p>Check out our resources page to find out more information on how you can mitigate the effects of burnout and things you could try to prevent it.</p>
            <a class="btn btn-primary mb-5" href={process.env.PUBLIC_URL + "/#resources"} role="button">Check out our resources</a>


        </Fragment>
    );    
}

export default HomePage;