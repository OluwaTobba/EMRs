import React, { useEffect, useState } from 'react';
import { db } from '../../../firebase';
import { collection, getDocs, query, orderBy } from "firebase/firestore";

function DataBreaches() {

    const [contents, setContents] = useState([]);

    useEffect(() => {

        const fetchContents = async () => {

            const q = query(collection(db, 'data-breaches'), orderBy('timestamp', 'asc'));
            const querySnapshot = await getDocs(q);
            const contentList = querySnapshot.docs.map(doc => doc.data());
            setContents(contentList);
        
        };

        fetchContents();

    }, []);

    return (

        <div className="min-h-screen flex flex-col items-center bg-gray-100">

            <h2 className="text-3xl font-bold my-6 text-center capitalize">DATA BREACHES</h2>

            <div className="w-full max-w-7xl p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {contents.map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded shadow-md mb-6">
                        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                        <p className="mb-4">{item.description}</p>
                        {item.fileURL && (
                            <video controls className="w-full rounded-lg">
                                <source src={item.fileURL} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        )}
                    </div>
                ))}
            </div>

        </div>

    );

}

export default DataBreaches