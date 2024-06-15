import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan } from '@fortawesome/free-solid-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const Trash = ({ notes, restoreNote, deleteNotePermanently }) => {
    return (
        <div className="trash">
            {notes.length === 0 ? (
                <p>No notes in trash</p>
            ) : (
                notes.map(note => (
                    <div key={note.id} className="note">
                        <h2>{note.title}</h2>
                        <h3>{note.tagline}</h3>
                        <p>{note.body}</p>
                        <div className="note-buttons">
                            <button title='Restore the note' className='restore-btn' onClick={() => restoreNote(note)}><FontAwesomeIcon icon={faDownload} /></button>
                            <button title='Delete Permanently' className='deletepermanent-btn' onClick={() => deleteNotePermanently(note.id)}><FontAwesomeIcon icon={faBan} /></button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Trash;
