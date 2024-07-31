import React, { useState } from 'react';
import { db, storage } from '../../../firebase';
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Modal from './AdminModal';

function AdminPanel() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null);
    const [section, setSection] = useState('data-breaches');
    const [progress, setProgress] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [isUploading, setIsUploading] = useState(false);

    const handleUpload = async () => {
        if (!file) {
            setModalMessage('Please upload a file!');
            setModalOpen(true);
            return;
        }

        if (!file.type.startsWith('video/')) {
            setModalMessage('Please upload a video file!');
            setModalOpen(true);
            return;
        }

        setIsUploading(true);

        const uploadFile = async (file, path) => {
            const storageRef = ref(storage, path);
            const uploadTask = uploadBytesResumable(storageRef, file);
            return new Promise((resolve, reject) => {
                uploadTask.on(
                    'state_changed',
                    (snapshot) => {
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        setProgress(progress);
                    },
                    (error) => reject(error),
                    async () => {
                        const fileURL = await getDownloadURL(uploadTask.snapshot.ref);
                        resolve(fileURL);
                    }
                );
            });
        };

        try {
            const fileURL = file ? await uploadFile(file, `training/${section}/videos/${file.name}`) : null;

            await addDoc(collection(db, section), {
                title,
                description,
                fileURL,
                timestamp: Timestamp.now()
            });

            setTitle('');
            setDescription('');
            setFile(null);
            setProgress(0);
            setModalMessage("Video Uploaded Successfully!");
        } catch (error) {
            console.error(error);
            setModalMessage("Error occurred during upload. Please try again.");
        } finally {
            setIsUploading(false);
            setModalOpen(true);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
                <h2 className="text-2xl font-bold mb-6 text-blue-700 text-center">Admin Panel</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded mt-1"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Description</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded mt-1"
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
                        <label className="block text-gray-700">Video File</label>
                        <input
                            type="file"
                            onChange={(e) => setFile(e.target.files[0])}
                            className="w-full p-3 border border-gray-300 rounded mt-1"
                            accept="video/*"
                        />
                    </div>
                    {progress > 0 && (
                        <div className="w-full bg-gray-200 rounded mt-1">
                            <div className="bg-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded" style={{ width: `${progress}%` }}>
                                {progress}%
                            </div>
                        </div>
                    )}
                    <button
                        type="button"
                        onClick={handleUpload}
                        className="mt-4 w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition duration-300"
                        disabled={isUploading}
                    >
                        {isUploading ? 'Uploading...' : 'Upload'}
                    </button>
                </form>
            </div>
            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} message={modalMessage} />
        </div>
    );
}

export default AdminPanel;