import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../../firebase';
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import PTQuiz from '../Quiz/PhysicalTheftQuiz';

function PhysicalTheft() {

    const [contents, setContents] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {

        const fetchContents = async () => {

            try {
                const q = query(collection(db, 'physical-theft'), orderBy('timestamp', 'asc'));
                const querySnapshot = await getDocs(q);
                const contentList = querySnapshot.docs.map(doc => doc.data());
                setContents(contentList);
            } catch (err) {
                setError('Failed to load contents. Please try again.');
                console.error(err);
            } finally {
                setLoading(false);
            }

        };

        fetchContents();
    
    }, []);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + contents.length) % contents.length);
    };

    const handleQuizComplete = () => {
        setQuizCompleted(true);
    };

    const handleEndCourse = () => {
        navigate('/training');
    };

    const currentContent = contents[currentIndex];

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <p>Loading... Please Wait...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <p>{error}</p>
            </div>
        );
    }

    return (

        <div className="min-h-screen flex flex-col items-center bg-gray-100">
        
            <h2 className="text-4xl font-bold my-6 text-center">PHYSICAL THEFT</h2>
        
            <div className="w-full max-w-6xl p-4 bg-white rounded shadow-md">
        
                {currentIndex < contents.length && currentContent && (
                    <div className="mb-6">
                        <h3 className="text-2xl font-bold mb-2">{currentContent.title}</h3>
                        <p className="mb-4">{currentContent.description}</p>

                        {currentContent.fileURL && (
                            <video
                                controls
                                className="w-full rounded-lg mb-4"
                                preload="none"
                                controlsList="nodownload"
                            >
                                <source src={currentContent.fileURL} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        )}

                    </div>
                )}

                {currentIndex === contents.length && (
                    <PTQuiz onComplete={handleQuizComplete} />
                )}

                <div className="flex justify-between mt-8">

                    {currentIndex > 0 && currentIndex < contents.length  && (
                        <button
                            onClick={handlePrevious}
                            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
                        >
                            Previous
                        </button>
                    )}

                    {currentIndex < contents.length && (
                        <button
                            onClick={handleNext}
                            className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
                        >
                            Next
                        </button>
                    )}

                </div>

                {currentIndex === contents.length && (

                    <div className="flex justify-between mt-4">

                        <button
                            onClick={() => setCurrentIndex(0)}
                            className={`bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-5 rounded ${!quizCompleted ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={!quizCompleted}
                        >
                            Restart Course
                        </button>
                        <button
                            onClick={handleEndCourse}
                            className={`bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-5 rounded ${!quizCompleted ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={!quizCompleted}
                        >
                            End Course
                        </button>

                    </div>

                )}

            </div>
    
        </div>
    
    );

}

export default PhysicalTheft;