import React from 'react';
import { createPortal } from 'react-dom';

const DeleteModal = ({ onClose }) => {

    return createPortal(
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800/40">
            <div className="bg-amber-100 p-6 rounded-lg w-1/4">
                <h2 className="text-2xl font-bold mb-4 text-center">Confirm Deletion</h2>
                <p className="text-center">Are you sure you want to delete this item?</p>
                <div className="flex justify-center mt-6 gap-2 w-full">
                    <button onClick={onClose} className="bg-[#CB3F3F] text-white p-2 w-50 rounded">Cancel</button>
                    <button onClick={onClose} className="bg-orange-400/70 text-white p-2 w-50 rounded">Delete</button>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default DeleteModal;
