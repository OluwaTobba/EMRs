import React, { useState } from 'react';

const quizQuestions = [
    {
        question: "1. What is the primary purpose of data encryption in the context of EMRs?",
        answers: ["To improve data processing speed", "To convert data into a code to prevent unauthorized access", "To reduce data storage requirements", "To enable data sharing among multiple users"],
        correctAnswer: "To convert data into a code to prevent unauthorized access"
    },
    {
        question: "2. Which type of encryption uses a single key for both encryption and decryption?",
        answers: ["Asymmetric encryption", "Hashing", "Symmetric encryption", "Biometric encryption"],
        correctAnswer: "Symmetric encryption"
    },
    {
        question: "3. What is a major challenge associated with symmetric encryption?",
        answers: ["It is slow and inefficient", "The encryption key cannot be changed", "Securely sharing the key between parties", "It is not secure for large datasets"],
        correctAnswer: "Securely sharing the key between parties"
    },
    {
        question: "4. Which type of encryption involves a public key for encryption and a private key for decryption?",
        answers: ["Symmetric encryption", "Asymmetric encryption", "Hashing", "Biometric encryption"],
        correctAnswer: "Asymmetric encryption"
    },
    {
        question: "5. What is the primary use of hashing in data security?",
        answers: ["To encrypt data for transmission", "To compress data for storage", "For data integrity verification", "For user authentication"],
        correctAnswer: "For data integrity verification"
    },
    {
        question: "6. Which encryption algorithm is recommended for symmetric encryption?",
        answers: ["DES (Data Encryption Standard)", "RSA (Rivest-Shamir-Adleman)", "AES (Advanced Encryption Standard)", "SHA (Secure Hash Algorithm)"],
        correctAnswer: "AES (Advanced Encryption Standard)"
    },
    {
        question: "7. Why is it important to encrypt data at rest and in transit?",
        answers: ["To comply with data retention policies", "To prevent unauthorized access whether data is stored or transmitted", "To improve data processing speed", "To enable data sharing across networks"],
        correctAnswer: "To prevent unauthorized access whether data is stored or transmitted"
    },
    {
        question: "8. What is the purpose of access controls in handling EMRs?",
        answers: ["To allow unrestricted access to EMRs", "To ensure only authorized personnel can access EMRs", "To reduce data storage requirements", "To facilitate data sharing among users"],
        correctAnswer: "To ensure only authorized personnel can access EMRs"
    },
    {
        question: "9. What is the role of audit trails in EMR handling?",
        answers: ["To enhance data processing speed", "To maintain records of all accesses and modifications to EMRs", "To reduce the storage space required for EMRs", "To encrypt data during transmission"],
        correctAnswer: "To maintain records of all accesses and modifications to EMRs"
    },
    {
        question: "10. Which of the following is a key component of secure storage solutions for EMRs?",
        answers: ["Public Wi-Fi networks", "Secure servers protected by firewalls", "Personal email accounts", "Social media platforms"],
        correctAnswer: "Secure servers protected by firewalls"
    },
    {
        question: "11. What should a data retention policy specify?",
        answers: ["The speed at which data should be processed", "The length of time EMRs should be retained and how to securely dispose of them", "The format in which data should be stored", "The type of data that should not be encrypted"],
        correctAnswer: "The length of time EMRs should be retained and how to securely dispose of them"
    },
    {
        question: "12. What is the primary focus of an access control policy?",
        answers: ["To enable data sharing among all employees", "To define how access to EMRs is managed and who is authorized to access the data", "To improve data processing speed", "To reduce data storage costs"],
        correctAnswer: "To define how access to EMRs is managed and who is authorized to access the data"
    },
    {
        question: "13. What is the purpose of an incident response policy?",
        answers: ["What is the purpose of an incident response policy?", "To reduce data storage requirements", "To enhance data processing speed", "To enable unrestricted access to EMRs"],
        correctAnswer: "What is the purpose of an incident response policy?"
    },
    {
        question: "14. Which Nigerian regulation outlines the requirements for data protection and privacy in the healthcare industry?",
        answers: ["National Health Act", "Nigeria Data Protection Regulation (NDPR)", "ISO 27001", "HIPAA"],
        correctAnswer: "Nigeria Data Protection Regulation (NDPR)"
    },
    {
        question: "15.	Why is it important for healthcare organizations to comply with international standards such as ISO 27001 and HIPAA?",
        answers: ["To reduce data processing costs", "To enhance the security of EMRs and ensure compliance with global best practices", "To facilitate data sharing among global healthcare providers", "To increase the speed of data processing"],
        correctAnswer: "To enhance the security of EMRs and ensure compliance with global best practices"
    },
];

function DBQuiz ({ onComplete }) {

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

        <div className="p-8 bg-white rounded-lg shadow-md w-full max-w-2xl mx-auto">

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

export default DBQuiz;