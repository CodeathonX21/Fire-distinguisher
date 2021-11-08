import React, { Fragment, useEffect, useState } from "react";


const SelfTest = () => {
    /*
    Quiz states:
    0 - Initial state
    1 - Currently in quiz
    2 - After quiz
    */
    const [quizState, setQuizState] = useState(0);

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [numPhysicalSymptoms, setNumPhysicalSymptoms] = useState(0);
    const [numEmotionalSymptoms, setNumEmotionalSymptoms] = useState(0);
    const [numBehaviouralSymptoms, setNumBehaviouralSymptoms] = useState(0);
    const [quizSum, setQuizSum] = useState(0);
    const [quizResultMsg, setQuizResultMsg] = useState("");

    // Questions to check if you experience symptoms of burnout with 5 of each type of question
    const selfTestQns = [
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

    const handleAnwerOptionClick = (answer, questionType) => {
        if (answer === "Yes") {
            switch(questionType) {
                case "Physical":
                  // code block
                  setNumPhysicalSymptoms(numPhysicalSymptoms + 1);
                  break;
                case "Emotional":
                  // code block
                    setNumEmotionalSymptoms(numEmotionalSymptoms + 1);
                  break;
                default:
                  // code block
                    setNumBehaviouralSymptoms(numBehaviouralSymptoms + 1);
              }
        }
        
        if (currentQuestion == 14) {
            setCurrentQuestion(0);
            setQuizState(2);

            var sum = numPhysicalSymptoms + numEmotionalSymptoms + numBehaviouralSymptoms;
            if (sum > 11) {
                setQuizResultMsg("You are experiencing a quite a few symptoms of burn out. Consider seeking help from someone.");
            } else if (sum > 7) {
                setQuizResultMsg("You are experiencing a few symptoms of burnout. Perhaps consider trying some of the solutions to burnout.");
            } else if (sum > 3) {
                setQuizResultMsg("Looks like you're not doing too bad! Still, be sure to take care of your personal wellbeing.")
            } else {
                setQuizResultMsg("Looks like you're doing ok! Continue practicing mindfulness and taking care of yourself!")
            }

            setQuizSum(sum);

        } else {
            setCurrentQuestion(currentQuestion + 1);
        }
        
    }

    const handleStartQuiz = () => {
        setQuizState(1);
    }

    const handleRestartBtnClick = () => {
        setQuizState(0);
        setNumPhysicalSymptoms(0);
        setNumEmotionalSymptoms(0);
        setNumBehaviouralSymptoms(0);
    }

    return (
        <Fragment>
            <h3>Burnout Assessment</h3>
            <p>This assessment aims to help you recognize the signs of burnout, and to find out if you might be experiencing burnout. Your response will not be saved. Feel free to answer honestly.</p>

            {quizState == 0 ? (
                <div class="container">
                    <h4>Start Quiz</h4>
                    <p>Take te self assessment</p>
                    <a class="btn btn-primary me-3" onClick={() => handleStartQuiz()} role="button">Start quiz</a>
                </div>
            ) : (<br/>)}

            {quizState == 1 ? (
                <Fragment>
                    <div class="card mt-3 mb-5">
                        <div class="row card-body">
                            <div class="col">
                                <h4 class="mb-3">Question {currentQuestion + 1} of {selfTestQns.length}</h4>
                                <p>{selfTestQns[currentQuestion].questionText}</p>
                                <footer class="blockquote-footer mt-3">{selfTestQns[currentQuestion].questionType}</footer>
                            </div>
                            <div class="col">
                                <h4>Answers</h4>
                                <a class="btn btn-primary me-4" onClick={() => handleAnwerOptionClick("Yes", selfTestQns[currentQuestion].questionType)} role="button">Yes</a>
                                <a class="btn btn-primary" onClick={() => handleAnwerOptionClick("No", selfTestQns[currentQuestion].questionType)} role="button">No</a>

                            </div>
                        </div>
                    </div>

                    <h4>Tally of symptoms</h4>
                    <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Physical</th>
                        <th scope="col">Emotional</th>
                        <th scope="col">Behavioural</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>{numPhysicalSymptoms}</td>
                        <td>{numEmotionalSymptoms}</td>
                        <td>{numBehaviouralSymptoms}</td>
                        </tr>
                    </tbody>
                    </table>
                </Fragment>
            ) : (<br/>)}

            {quizState == 2 ? (
                <div class="container">
                    <h4 class="mb-3">Quiz Results</h4>
                    <table class="table mb-5">
                    <thead>
                        <tr>
                        <th scope="col">Physical</th>
                        <th scope="col">Emotional</th>
                        <th scope="col">Behavioural</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>{numPhysicalSymptoms}</td>
                        <td>{numEmotionalSymptoms}</td>
                        <td>{numBehaviouralSymptoms}</td>
                        </tr>
                    </tbody>
                    </table>

                    <p>{quizResultMsg}</p>

                    <a class="btn btn-primary me-4" onClick={() => handleRestartBtnClick()} role="button">Restart Assessment</a>
                    {quizSum > 7 ? (
                        <a class="btn btn-primary me-4" href={process.env.PUBLIC_URL + "/resources"} role="button">View Resources</a>
                    ) : (<br/>)}
                </div>
            ) : (<br/>)}
            
            <div class="mb-5"/>

        </Fragment>
    );    
}

export default SelfTest;