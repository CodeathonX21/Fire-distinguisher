import React, { Fragment, useEffect, useState } from "react";


const BurnoutQuiz = () => {
    const [quizState, setQuizState] = useState(0);

    const [currentQuestion, setCurrentQuestion] = useState(0);


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

    return (
        <Fragment>
            <h4>Burnout Quiz</h4>
            <p> -- under construction -- </p>
        </Fragment>
    );    
}

export default BurnoutQuiz;