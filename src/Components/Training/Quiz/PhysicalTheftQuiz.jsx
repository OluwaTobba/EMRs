import React, { useState } from 'react';

const quizQuestions = [
    {
        question: "• What is a key strategy for securing devices in the workplace?",
        answers: ["Leaving them unattended", "Using cable locks", "Storing them in public areas", "Sharing passwords"],
        correctAnswer: "Using cable locks"
    },
    {
        question: "• Why is data encryption important for devices containing EMRs?",
        answers: ["It makes the device run faster", "It protects data in case of theft", "It reduces battery usage", "It is required for all devices"],
        correctAnswer: "It protects data in case of theft"
    },
    {
        question: "• What should you do if a device containing EMRs is stolen?",
        answers: ["Ignore it", "Notify the IT department and security team immediately", "Try to track the thief yourself", "Replace the device without reporting"],
        correctAnswer: "Notify the IT department and security team immediately"
    },
    {
        question: "• Which of the following is a recommended practice for preventing physical theft?",
        answers: ["Leaving devices visible in the car", "Using strong passwords and automatic screen locks", "Sharing devices with unauthorized personnel", "Disabling encryption"],
        correctAnswer: "Using strong passwords and automatic screen locks"
    },
    {
        question: "• What is the purpose of conducting regular security training sessions?",
        answers: ["To comply with regulations", "To inform staff about best practices and updates in security policies", "To increase workload", "To reduce operational costs"],
        correctAnswer: "To inform staff about best practices and updates in security policies"
    },
];

function PTQuiz ({ onComplete }) {

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

export default PTQuiz;