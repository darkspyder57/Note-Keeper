import React from 'react';
import Note from './Note';

const NoteGrid = ({ notes, openPopup, deleteNote }) => {
    const pinnedNotes = notes.filter(note => note.pinned);
    const unpinnedNotes = notes.filter(note => !note.pinned);

    return (
        <div className="note-grid">
            {[...pinnedNotes, ...unpinnedNotes].map(note => (
                <Note key={note.id} note={note} onClick={() => openPopup(note)} onDelete={deleteNote} />
            ))}
        </div>
    );
};

export default NoteGrid;
