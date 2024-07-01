import React, { useState } from 'react';
import { db, storage } from '../../../firebase';
import { collection, addDoc } from "firebase/firestore"; 
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const AdminPanel = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null);
    const [section, setSection] = useState('data-breaches');

    const handleUpload = async () => {
        if (!file) {
            alert("Please select a file first!");
            return;
        }
        
        const storageRef = ref(storage, `training/${section}/${file.name}`);
        await uploadBytes(storageRef, file);
        const fileURL = await getDownloadURL(storageRef);

        await addDoc(collection(db, section), {
            title,
            description,
            fileURL,
        });

        setTitle('');
        setDescription('');
        setFile(null);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
                <h2 className="text-2xl font-bold mb-6 text-center">Admin Panel</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Description</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Section</label>
                        <select
                            value={section}
                            onChange={(e) => setSection(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                        >
                            <option value="data-breaches">Data Breaches</option>
                            <option value="insider-threats">Insider Threats</option>
                            <option value="ransomware">Ransomware</option>
                            <option value="weak-passwords">Weak Passwords</option>
                            <option value="physical-theft">Physical Theft</option>
                            <option value="phishing-attacks">Phishing Attacks</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">File</label>
                        <input
                            type="file"
                            onChange={(e) => setFile(e.target.files[0])}
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                        />
                    </div>
                    <button
                        type="button"
                        onClick={handleUpload}
                        className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition duration-300"
                    >
                        Upload
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminPanel;