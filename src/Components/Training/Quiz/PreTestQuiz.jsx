import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const quizQuestions = [
    // Question 1
    {
        question: "Which of the following is the primary goal of securing Electronic Medical Records (EMR)?",
        options: ["Reducing operational costs", "Ensuring patient privacy and data integrity", "Increasing patient enrollment", "Enhancing patient engagement"],
        answer: " Ensuring patient privacy and data integrity",
    },
    // Question 2
    {
        question: "What is the most effective method to ensure only authorized personnel can access EMRs?",
        options: ["Using generic login credentials", "Implementing multi-factor authentication (MFA)", "Sharing passwords among staff", "Storing passwords in plain text"],
        answer: "Implementing multi-factor authentication (MFA)",
    },
    // Question 3
    {
        question: "Which regulation governs the protection of personal data in Nigeria?",
        options: ["GDPR", "HIPAA", "NDPR", "CCPA"],
        answer: "NDPR",
    },
    // Question 4
    {
        question: "What is the purpose of encrypting EMR data?",
        options: ["To speed up data transmission", "To reduce data storage costs", "To protect data from unauthorized access", "STo enhance data sharing capabilities"],
        answer: "To protect data from unauthorized access",
    },
    // Question 5
    {
        question: "Which of the following is a best practice for securing EMR systems against cyber attacks?",
        options: ["Regularly updating software and systems", "Using outdated antivirus software", "Disabling firewalls", "Ignoring security patches"],
        answer: "Regularly updating software and systems",
    },
    // Question 6
    {
        question: "How can healthcare facilities ensure the physical security of EMR systems?",
        options: ["Leaving servers in public areas", "Restricting access to server rooms", "Allowing unrestricted access to all employees", "Keeping server rooms unlocked"],
        answer: "Restricting access to server rooms",
    },
    // Question 7
    {
        question: "What is the role of audit logs in EMR security?",
        options: ["To enhance system performance", "To monitor and track access to EMR data", "To delete old medical records", "To share patient data with third parties"],
        answer: "To monitor and track access to EMR data",
    },
    // Question 8
    {
        question: "Which of the following is a critical step in disaster recovery planning for EMR systems?",
        options: ["Ignoring backup procedures", "Regularly backing up EMR data", "Storing backups in the same location as the original data", "Using unencrypted backup tapes"],
        answer: "Regularly backing up EMR data",
    },
    // Question 9
    {
        question: "Why is user training important in securing EMR systems?",
        options: ["To reduce the need for technical support", "To prevent unauthorized access and data breaches", "To encourage password sharing", "To eliminate the need for security protocols"],
        answer: "To prevent unauthorized access and data breaches",
    },
    // Question 10
    {
        question: "What is a common consequence of failing to secure EMRs properly?",
        options: ["Increased patient satisfaction", "Data breaches and legal penalties", "Faster data access", "Lower operational costs"],
        answer: "Data breaches and legal penalties",
    },
    // Question 11
    {
        question: "How often should security risk assessments be conducted for EMR systems?",
        options: ["Every 10 years", "Once during the system setup", "Annually or whenever there are significant changes", "Only after a data breach occurs"],
        answer: "Annually or whenever there are significant changes",
    },
    // Question 12
    {
        question: "Which technology helps in the secure transmission of EMR data over networks?",
        options: ["FTP", "HTTP", "VPN", "Telnet"],
        answer: "VPN",
    },
    // Question 13
    {
        question: "Which of the following should be included in an EMR system's access control policy?",
        options: ["Password length and complexity requirements", "Allowing guest users", "Sharing passwords among staff", "Disabling account lockout features"],
        answer: "Password length and complexity requirements",
    },
    // Question 14
    {
        question: "What should be done to secure EMR data stored on mobile devices?",
        options: ["Disabling encryption", "Using strong encryption methods", "Allowing public access", "Storing data in plain text"],
        answer: "Using strong encryption methods",
    },
    // Question 15
    {
        question: "Which practice helps in maintaining data integrity in EMR systems?",
        options: ["Allowing unrestricted data editing", "Implementing strict data access controls", "Ignoring data validation processes", "Encouraging data duplication"],
        answer: "Implementing strict data access controls",
    },
    // Question 16
    {
        question: "Why is it important to have a data retention policy for EMRs?",
        options: ["To ensure that data is kept indefinitely", "To comply with legal and regulatory requirements", "To reduce storage space by deleting all old records", "To avoid creating backup copies"],
        answer: "To comply with legal and regulatory requirements)",
    },
    // Question 17
    {
        question: "What is the benefit of conducting regular security audits on EMR systems?",
        options: ["Identifying and addressing potential vulnerabilities", "Increasing the system's complexity", "Reducing the need for technical staff", "Ignoring security flaws"],
        answer: "Identifying and addressing potential vulnerabilities",
    },
    // Question 18
    {
        question: "Which of the following can help in protecting EMR data from ransomware attacks?",
        options: ["Disabling antivirus software", "Keeping software and systems up to date", "Allowing users to install any software", "Ignoring suspicious emails"],
        answer: "Keeping software and systems up to date",
    },
    // Question 19
    {
        question: "What is the role of firewalls in securing EMR systems?",
        options: ["To monitor and control incoming and outgoing network traffic", "To increase network speed", "To reduce the need for data encryption", "To allow all traffic through the network"],
        answer: "To monitor and control incoming and outgoing network traffic",
    },
    // Question 20
    {
        question: "Which of the following best describes the principle of least privilege in EMR security?",
        options: ["Granting all users full access rights", "Giving users the minimum level of access required for their role", " Allowing unrestricted access to administrators", "Disabling access control mechanisms"],
        answer: "Giving users the minimum level of access required for their role",
    }
];

function PreTestQuiz() {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [showResults, setShowResults] = useState(false);
    const [error, setError] = useState('');
    const [ShowErrorModal, setShowErrorModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {

        if (ShowErrorModal) {

            const timer = setTimeout(() => {
                setShowErrorModal(false);
            }, 3000);

            return () => clearTimeout(timer);

        }

    }, [ShowErrorModal]);

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleNextQuestion = () => {

        if (!selectedOption) {
            setError('Please select an option before proceeding.');
            setShowErrorModal(true);
            return;
        }

        if (selectedOption === quizQuestions[currentQuestion].answer) {
            setScore(score + 1);
        }

        setSelectedOption('');
        setError('');

        if (currentQuestion < quizQuestions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResults(true);
        }

    };

    const handleProceed = () => {
        navigate('/training');
    };

    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="bg-white p-6 rounded shadow-md w-full max-w-md max-w-lg lg:max-w-6xl">

                {!showResults ? (
                    <>

                        <div className="mb-7 flex flex-col space-y-2">

                            <h3 className="text-2xl font-bold">
                                Question {currentQuestion + 1}/{quizQuestions.length}
                            </h3>

                            <div className="mt-4 w-full bg-gray-200 h-2 rounded-full">
                                <div
                                    className="bg-blue-700 h-2 rounded-full"
                                    style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                                ></div>
                            </div>

                        </div>

                        <h4 className="text-xl font-semibold mb-4">{quizQuestions[currentQuestion].question}</h4>

                        <div className="space-y-4">

                            {quizQuestions[currentQuestion].options.map((option, index) => (
                                <div key={index} className="flex items-center">
                                    <input
                                        type="radio"
                                        name="option"
                                        value={option}
                                        checked={selectedOption === option}
                                        onChange={handleOptionChange}
                                        className="mr-3"
                                    />
                                    <label>{option}</label>
                                </div>
                            ))}

                        </div>

                        <button
                            onClick={handleNextQuestion}
                            className="mt-6 w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700 transition duration-400"
                        >
                            Next
                        </button>

                    </>
                ) : (
                    <div>

                        <h3 className="text-3xl font-bold mb-4 text-center">Quiz Results</h3>

                        <p className="text-2xl mb-4 text-center">Your score: {score} / {quizQuestions.length}</p>

                        <div className="space-y-4">
                            {quizQuestions.map((question, index) => (
                                <div key={index} className="mb-4">
                                    <h4>{question.question}</h4>
                                    <p className="font-bold">Correct answer: {question.answer}</p>
                                </div>
                            ))}
                        </div>
                        
                        <button
                            onClick={handleProceed}
                            className="mt-4 w-full py-2 px-4 bg-green-500 text-white font-bold rounded-md hover:bg-green-700 transition duration-300"
                        >
                            Proceed to Register for the Training
                        </button>

                    </div>
                )}

            </div>

            {ShowErrorModal && (
                <div className="fixed text-center inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
                        <h3 className="text-xl font-bold mb-4">Error</h3>
                        <p>{error}</p>
                    </div>
                </div>
            )}

        </div>

    );
}

export default PreTestQuiz;