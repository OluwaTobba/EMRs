import React, { useState, useEffect } from 'react';
import { db } from '../../../firebase';
import { collection, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import Modal from './PopUpModal';

const AdminUpdateDelete = () => {
    const [contents, setContents] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedContent, setSelectedContent] = useState(null);
    const [updatedTitle, setUpdatedTitle] = useState('');
    const [updatedDescription, setUpdatedDescription] = useState('');
    const [updatedFileURL, setUpdatedFileURL] = useState('');

    useEffect(() => {
        const fetchContents = async () => {
            const querySnapshot = await getDocs(collection(db, 'data-breaches', 'ransomware', 'phishing-attacks'));
            const contentList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setContents(contentList);
        };

        fetchContents();
    }, []);

    const handleUpdate = async (content) => {
        setSelectedContent(content);
        setUpdatedTitle(content.title);
        setUpdatedDescription(content.description);
        setUpdatedFileURL(content.fileURL);
        setIsModalOpen(true);
    };

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, 'data-breaches', id));
        setContents(contents.filter(content => content.id !== id));
    };

    const handleModalSubmit = async () => {
        const contentDoc = doc(db, 'data-breaches', selectedContent.id);
        await updateDoc(contentDoc, {
            title: updatedTitle,
            description: updatedDescription,
            fileURL: updatedFileURL
        });
        setContents(contents.map(content => 
            content.id === selectedContent.id 
            ? { ...content, title: updatedTitle, description: updatedDescription, fileURL: updatedFileURL }
            : content
        ));
        setIsModalOpen(false);
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100 py-10">
            <h2 className="text-3xl font-bold mb-6">Admin Update/Delete Panel</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl p-4">
                {contents.map((content) => (
                    <div key={content.id} className="bg-white p-4 rounded shadow-md">
                        <h3 className="text-xl font-bold mb-2">{content.title}</h3>
                        <p className="mb-4">{content.description}</p>
                        {content.fileURL && (
                            <video controls className="w-full mb-4">
                                <source src={content.fileURL} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        )}
                        <button 
                            className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-300 mb-2"
                            onClick={() => handleUpdate(content)}
                        >
                            Update
                        </button>
                        <button 
                            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
                            onClick={() => handleDelete(content.id)}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
            {isModalOpen && (
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <div className="p-6 bg-white rounded shadow-md">
                        <h3 className="text-2xl font-bold mb-4">Update Content</h3>
                        <form onSubmit={(e) => { e.preventDefault(); handleModalSubmit(); }}>
                            <div className="mb-4">
                                <label className="block text-gray-700">Title</label>
                                <input
                                    type="text"
                                    value={updatedTitle}
                                    onChange={(e) => setUpdatedTitle(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Description</label>
                                <textarea
                                    value={updatedDescription}
                                    onChange={(e) => setUpdatedDescription(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                    required
                                ></textarea>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">File URL</label>
                                <input
                                    type="text"
                                    value={updatedFileURL}
                                    onChange={(e) => setUpdatedFileURL(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                />
                            </div>
                            <button 
                                type="submit"
                                className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition duration-300"
                            >
                                Update
                            </button>
                        </form>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default AdminUpdateDelete;