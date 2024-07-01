import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../../firebase';
import { collection, getDocs } from "firebase/firestore";

function DataBreaches() {

    const { section } = useParams();
    const [contents, setContents] = useState([]);

    useEffect(() => {
        const fetchContents = async () => {
            const querySnapshot = await getDocs(collection(db, section));
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push({ id: doc.id, ...doc.data() });
            });
            setContents(items);
        };

        fetchContents();
    }, [section]);

    return (
        <div className="min-h-screen p-6 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-center capitalize">{section.replace('-', ' ')}</h2>
                {contents.map((content) => (
                    <div key={content.id} className="bg-white p-6 rounded shadow-md mb-6">
                        <h3 className="text-2xl font-bold mb-4">{content.title}</h3>
                        <p className="mb-4">{content.description}</p>
                        <video controls className="w-full">
                            <source src={content.fileURL} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DataBreaches