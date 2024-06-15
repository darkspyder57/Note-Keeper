import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaintbrush } from '@fortawesome/free-solid-svg-icons'
import { faTrashArrowUp } from '@fortawesome/free-solid-svg-icons'

const Note = ({ note, onClick, onDelete }) => (
    <div className="note">
        <h2>{note.title}</h2>
        <h3>{note.tagline}</h3>
        <p>{note.body}</p>
        <div className="note-buttons">
            <button title='Edit the content' className='edit-btn' onClick={onClick}><FontAwesomeIcon icon={faPaintbrush} /></button>
            <button title='Delete the note' className='delete-btn' onClick={() => onDelete(note.id)}><FontAwesomeIcon icon={faTrashArrowUp} /></button>
        </div>
    </div>
);

export default Note;
