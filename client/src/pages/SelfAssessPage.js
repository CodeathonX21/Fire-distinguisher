import React, { Fragment, useEffect, useState } from "react";


const SelfAssessPage = () => {

    const numBurnoutQuizQns = 10;

    // Questions to test your knowledge about burnout
    const burnoutQuiz = [
        {
            questionText: "Is burnout the same as stress?",
            answerOptions: {
                answerText: 'Yes',
                answerText: 'No'
            }
        }
    ]

    const numQnPhysical = 5;
    const numQnEmotional = 5;
    const numQnBehavioural = 5;

    // Questions to check if you experience symptoms of burnout
    const selfAssessQuiz = [
        {
            questionText: 'Do you often feel exhausted?',
            questionType: 'Physical'
        },
        {
            questionText: 'Do you fall sick more often?',
            questionType: 'Physical'
        },
        {
            questionText: 'Do you often get headaches?',
            questionType: 'Physical'
        },
        {
            questionText: 'Are you able to sleep regularly?',
            questionType: 'Physical'
        },
        {
            questionText: 'Have you experienced any loss of appetite?',
            questionType: 'Physical'
        },
        {
            questionText: 'Do you often feel disinterested in your work or home life?',
            questionType: 'Emotional'
        },
        {
            questionText: 'Do you feel like the work you do lacks in value?',
            questionType: 'Emotional'
        },
        {
            questionText: 'Do you feel a loss of motivation in work or life in general?',
            questionType: 'Emotional'
        },
        {
            questionText: 'Do you feel depressed?',
            questionType: 'Emotional'
        },
        {
            questionText: 'Do you feel you are becoming more cynical?',
            questionType: 'Emotional'
        },
        {
            questionText: 'Do you feel you are unable to stay focused often?',
            questionType: 'Behavioural'
        },
        {
            questionText: 'Do you find yourself procrastinating on simple tasks?',
            questionType: 'Behavioural'
        },
        {
            questionText: 'Do you find yourself acting more hostile towards others?',
            questionType: 'Behavioural'
        },
        {
            questionText: 'Do you find yourself getting addicted to unhealthy coping mechanisms?',
            questionType: 'Behavioural'
        },
        {
            questionText: 'Do you find yourself easily irritatable?',
            questionType: 'Behavioural'
        }
    ]


    return (
        <Fragment>
            <h1 className="mt-5">Self Assesment</h1>

            <h3 className="mt-3 mb-2"></h3>

            <p></p>

        </Fragment>
    );    
}

export default SelfAssessPage;