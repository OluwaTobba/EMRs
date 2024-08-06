import React, { useState } from 'react';

const quizQuestions = [
    {
        question: "• What is a common sign of a phishing email?",
        answers: ["Familiar sender", "No attachments", "Urgent or threatening language", "Short message"],
        correctAnswer: "Urgent or threatening language"
    },
    {
        question: "• What should you do first if you suspect an email is a phishing attempt?",
        answers: ["Reply to the sender", "Click on the link to verify", "Report to the IT department", "Delete the email immediately"],
        correctAnswer: "Report to the IT department"
    },
    {
        question: "• Why is it important not to click on links in a suspected phishing email?",
        answers: ["It could lead to a legitimate website", "It might install malware on your system", "It's a waste of time", "It's against company policy"],
        correctAnswer: "It might install malware on your system"
    },
    {
        question: "• What kind of language do phishing emails often use to trick recipients?",
        answers: ["Polite and formal", "Casual and friendly", "Urgent and threatening", "Technical and complex"],
        correctAnswer: "Urgent and threatening"
    },
    {
        question: "• Which of the following is a safe practice when dealing with emails?",
        answers: ["Opening all attachments to check their content", "Verifying requests for sensitive information through a known secondary method", "Ignoring emails from unknown senders", "Forwarding suspicious emails to friends for verification"],
        correctAnswer: "Verifying requests for sensitive information through a known secondary method"
    },
];

function PAQuiz ({ onComplete }) {

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);

    const handleAnswerClick = (answer) => {
        setSelectedAnswer(answer);
    };

    const handleNextQuestion = () => {
        if (selectedAnswer === quizQuestions[currentQuestionIndex].correctAnswer) {
            setScore(score + 1);
        }
        setSelectedAnswer(null);
        if (currentQuestionIndex < quizQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setShowResults(true);
            onComplete();
        }
    };

    const handleRestart = () => {
        setScore(0);
        setCurrentQuestionIndex(0);
        setShowResults(false);
    };

    return (

        <div className="p-8 mt-7 bg-white rounded-lg shadow-md w-full max-w-2xl mx-auto">

            <h2 className='text-2xl text-center font-bold mb-4'>Quiz</h2>

            {showResults ? (

                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Your Score: {score} / {quizQuestions.length}</h2>
                    <button
                        onClick={handleRestart}
                        className="py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition duration-300"
                    >
                        Restart Quiz
                    </button>
                </div>

            ) : (
                <div className="text-center">

                    <h3 className="text-xl font-bold mb-4">{quizQuestions[currentQuestionIndex].question}</h3>

                    <div className="grid grid-cols-1 gap-4">
                        {quizQuestions[currentQuestionIndex].answers.map((answer, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswerClick(answer)}
                                className={`py-2 px-4 border rounded-md hover:bg-gray-200 transition duration-300 ${
                                    selectedAnswer === answer ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
                                }`}
                            >
                                {answer}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={handleNextQuestion}
                        disabled={!selectedAnswer}
                        className="mt-6 py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition duration-300 disabled:opacity-50"
                    >
                        Next Question
                    </button>

                </div>
            )}

        </div>

    );

};

export default PAQuiz;