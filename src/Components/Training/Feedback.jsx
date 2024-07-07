import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, addDoc } from "firebase/firestore";

function Feedback() {

    const [feedback, setFeedback] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {

        let timer;
    
        if (submitted || error) {

          timer = setTimeout(() => {
            setSubmitted(false);
            setMessage('');
            setError('');
          }, 3000);

        }
        
        return () => clearTimeout(timer);

    }, [submitted, error]);


    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await addDoc(collection(db, 'feedback'), {
                feedback,
                timestamp: new Date(),
            });

            setFeedback('');
            setMessage('Feedback submitted successfully!');
            setSubmitted(true);
            setError('');

        } catch (error) {

            setMessage('');
            setError('Error submitting feedback. Please try again.');
        
        }

    };

    return(

        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="bg-white p-7 rounded shadow-md w-full max-w-md">

                <h3 className="text-2xl font-bold mb-6 text-center text-blue-500">Provide A Feedback</h3>

                <form onSubmit={handleSubmit}>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Feedback</label>

                        <textarea
                            rows="5"
                            value={feedback}
                            className="mt-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline align-top h-32"
                            onChange={(e) => setFeedback(e.target.value)}
                            required
                        ></textarea>

                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition duration-300"
                    >
                        Submit
                    </button>

                    {message && <p className="mt-4 text-green-500">{message}</p>}
                    {error && <p className="mt-4 text-red-500">{error}</p>}

                </form>

            </div>

        </div>

    );
}

export default Feedback;