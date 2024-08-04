import React, { useState } from 'react';

const quizQuestions = [
    {
        question: "1. What is the primary purpose of user authentication in the context of EMRs?",
        answers: ["To improve data processing speed", "To verify the identity of users accessing sensitive information", "To reduce data storage costs", "To enable data sharing among multiple users"],
        correctAnswer: "To verify the identity of users accessing sensitive information"
    },
    {
        question: "2. Which type of insider threat involves employees unintentionally compromising security?",
        answers: ["Malicious Insiders", "Negligent Insiders", "Compromised Insiders", "External Hackers"],
        correctAnswer: "Negligent Insiders"
    },
    {
        question: "3. Which authentication method involves using a hardware or software token to generate a one-time password?",
        answers: ["Password-Based Authentication", "Multi-Factor Authentication (MFA)", "Biometric Authentication", "Token-Based Authentication"],
        correctAnswer: "Token-Based Authentication"
    },
    {
        question: "4. What is a key characteristic of Multi-Factor Authentication (MFA)?",
        answers: ["It uses a single key for both encryption and decryption", "It requires two or more authentication factors", "It converts data into a fixed-size string of characters", "It involves discretionary access controls"],
        correctAnswer: "It requires two or more authentication factors"
    },
    {
        question: "5. Which of the following is NOT a type of user authentication mentioned in the training?",
        answers: ["Password-Based Authentication", "Multi-Factor Authentication (MFA)", "Role-Based Access Control (RBAC)", "Biometric Authentication"],
        correctAnswer: "Role-Based Access Control (RBAC)"
    },
    {
        question: "6. What is the main advantage of implementing Multi-Factor Authentication (MFA)?",
        answers: ["It simplifies the login process for users", "It reduces the need for strong password policies", "It adds an extra layer of security against unauthorized access", "It eliminates the need for user training"],
        correctAnswer: "It adds an extra layer of security against unauthorized access"
    },
    {
        question: "7. What is the purpose of monitoring authentication attempts?",
        answers: ["To allow unrestricted access to EMRs", "To keep track of failed login attempts and implement lockout policies", "To reduce data processing costs", "To enable data sharing among users"],
        correctAnswer: "To keep track of failed login attempts and implement lockout policies"
    },
];

function ITQuiz ({ onComplete }) {

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

export default ITQuiz;