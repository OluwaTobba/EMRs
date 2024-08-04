import React, { useState } from 'react';

const quizQuestions = [
    {
        question: "1. What is the first step you should take if you suspect a ransomware infection?",
        answers: ["Pay the ransom", "Isolate the infected system", "Inform patients", "Ignore it"],
        correctAnswer: "Isolate the infected system"
    },
    {
        question: "2. Why is it important not to pay the ransom?",
        answers: ["It's too expensive", "It encourages further attacks and doesn't guarantee data recovery", "It's illegal", "It's unnecessary"],
        correctAnswer: "It encourages further attacks and doesn't guarantee data recovery"
    },
    {
        question: "3. Who should be notified first in case of a ransomware attack?",
        answers: ["Patients", "IT department", "Local media", "Family members"],
        correctAnswer: "IT department"
    },
    {
        question: "4. What should be done after isolating the infected system?",
        answers: ["Inform law enforcement", "Reconnect it to the network", "Update its software", "Format the hard drive"],
        correctAnswer: "Inform law enforcement"
    },
    {
        question: "5. What is a common infection vector for ransomware?",
        answers: ["Physical theft", "Phishing emails", "Power outage", "Hardware failure"],
        correctAnswer: "Phishing emails"
    },
    {
        question: "6. How often should you backup your data?",
        answers: ["Annually", "Monthly", "Weekly", "Regularly, depending on the data criticality"],
        correctAnswer: "Regularly, depending on the data criticality"
    },
    {
        question: "7. What should be included in the incident rep?",
        answers: ["Details of the ransomware type and infection vector", "Personal opinions on the attack", "The names of all staff members involved", "Only the final outcome"],
        correctAnswer: "Details of the ransomware type and infection vector"
    },
    {
        question: "8. Why is it important to notify regulatory bodies?",
        answers: ["To get a reward", "To comply with legal requirements and protect public interest", "To shame the attackers publicly", "To seek compensation"],
        correctAnswer: "To comply with legal requirements and protect public interest"
    },
    {
        question: "9. What is a critical step after recovering from a ransomware attack?",
        answers: ["Forgetting about the incident", "Monitoring systems for further activity", "Shutting down all systems permanently", "Publishing details online"],
        correctAnswer: "Monitoring systems for further activity"
    },
    {
        question: "10. What is an effective way to prevent ransomware attacks?",
        answers: ["Using outdated software", "Sharing passwords with colleagues", "Educating and training staff", "Ignoring suspicious activities"],
        correctAnswer: "Educating and training staff"
    },
];

function RQuiz ({ onComplete }) {

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

export default RQuiz;