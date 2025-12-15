import React from 'react';
import './InfoModal.css';

const InfoModal = ({ isOpen, onClose, title, content }) => {
    if (!isOpen) return null;

    return (
        <div className="info-modal-overlay" onClick={onClose}>
            <div className="info-modal-content" onClick={e => e.stopPropagation()}>
                <button className="info-close-btn" onClick={onClose}>&times;</button>
                <h2>{title}</h2>
                <div className="info-modal-body">
                    {content}
                </div>
            </div>
        </div>
    );
};

export default InfoModal;
