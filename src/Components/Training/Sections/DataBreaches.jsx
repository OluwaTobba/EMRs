import React, { useEffect, useState } from 'react';
import { db } from '../../../firebase';
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
// import VideoPlayer from './VideoPlayer';

function DataBreaches() {

    const [contents, setContents] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchContents = async () => {
            const q = query(collection(db, 'data-breaches'), orderBy('timestamp', 'asc'));
            const querySnapshot = await getDocs(q);
            const contentList = querySnapshot.docs.map(doc => doc.data());
            setContents(contentList);
        };

        fetchContents();
    }, []);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % contents.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + contents.length) % contents.length);
    };

    const currentContent = contents[currentIndex];

    return (

        <div className="min-h-screen flex flex-col items-center bg-gray-100">
            
            <h2 className="text-3xl font-bold my-6 text-center capitalize">DATA BREACHES</h2>
            
            <div className="w-full max-w-5xl p-4 bg-white rounded shadow-md">

                {currentContent && (

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
                        {currentContent.imageURL && (
                            <img src={currentContent.imageURL} alt={currentContent.title} className="w-full rounded-lg mb-4" />
                        )}
                        {currentContent.documentURL && (
                            <div className="w-full h-96 mb-4">
                                <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}>
                                    <Viewer fileUrl={currentContent.documentURL} />
                                </Worker>
                                <a href={currentContent.documentURL} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-center underline">View Full Document</a>
                            </div>
                        )}

                    </div>

                )}

                <div className="flex justify-between mt-8">

                    {currentIndex > 0 && (
                        <button
                            onClick={handlePrevious}
                            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
                        >
                            Previous
                        </button>
                    )}
                    {currentIndex < contents.length - 1 && (
                        <button
                            onClick={handleNext}
                            className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
                        >
                            Next
                        </button>
                    )}

                </div>

            </div>

        </div>

    );

}

export default DataBreaches;