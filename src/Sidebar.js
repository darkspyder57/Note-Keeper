import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const Sidebar = ({ currentSection, setCurrentSection }) => {
    return (
        <div className="sidebar">
            <button onClick={() => setCurrentSection('notes')} className={currentSection === 'notes' ? 'active' : ''}>
                Notes <FontAwesomeIcon icon={faBook} />
            </button>
            <button onClick={() => setCurrentSection('trash')} className={currentSection === 'trash' ? 'active' : ''}>
                Trash <FontAwesomeIcon icon={faTrashCan} />
            </button>
        </div>
    );
};

export default Sidebar;
