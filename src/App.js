import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NoteGrid from './NoteGrid';
import NotePopup from './NotePopup';
import Pagination from './Pagination';
import Sidebar from './Sidebar';
import Trash from './Trash';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFeather } from '@fortawesome/free-solid-svg-icons'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
    const [notes, setNotes] = useState([]);
    const [trashNotes, setTrashNotes] = useState([]);
    const [currentNote, setCurrentNote] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentSection, setCurrentSection] = useState('notes');
    const notesPerPage = 6;

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
        const savedTrash = JSON.parse(localStorage.getItem('trash')) || [];
        setNotes(savedNotes);
        setTrashNotes(savedTrash);
    }, []);

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    useEffect(() => {
        localStorage.setItem('trash', JSON.stringify(trashNotes));
    }, [trashNotes]);

    const addOrUpdateNote = (note) => {
        setNotes(prevNotes => {
            const noteIndex = prevNotes.findIndex(n => n.id === note.id);
            if (noteIndex > -1) {
                const updatedNotes = [...prevNotes];
                updatedNotes[noteIndex] = note;
                return updatedNotes;
            }
            return [...prevNotes, { ...note, id: uuidv4(), pinned: false }];
        });
        setIsPopupOpen(false);
    };

    const deleteNote = (noteId) => {
        setNotes(prevNotes => {
            const noteToDelete = prevNotes.find(n => n.id === noteId);
            if (noteToDelete) {
                setTrashNotes(prevTrash => [...prevTrash, noteToDelete]);
            }
            return prevNotes.filter(note => note.id !== noteId);
        });
    };

    const restoreNote = (note) => {
        setTrashNotes(prevTrash => prevTrash.filter(t => t.id !== note.id));
        setNotes(prevNotes => [...prevNotes, { ...note, id: uuidv4() }]);
    };

    const deleteNotePermanently = (noteId) => {
        setTrashNotes(prevTrash => prevTrash.filter(t => t.id !== noteId));
    };

    const openPopup = (note) => {
        setCurrentNote(note);
        setIsPopupOpen(true);
    };

    const notesToShow = notes.slice((currentPage - 1) * notesPerPage, currentPage * notesPerPage);

    return (
        <div className="App">
            <Sidebar currentSection={currentSection} setCurrentSection={setCurrentSection} />
            <div className="main-content">
              <h1>Note-Keeper</h1>
                {currentSection === 'notes' && (
                    <>
                        <button className='add-notebtn' onClick={() => openPopup(null)}><FontAwesomeIcon icon={faFeather} /> Add Note</button>
                        <NoteGrid notes={notesToShow} openPopup={openPopup} deleteNote={deleteNote} />
                        <Pagination totalNotes={notes.length} notesPerPage={notesPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                    </>
                )}
                {currentSection === 'trash' && (
                    <Trash notes={trashNotes} restoreNote={restoreNote} deleteNotePermanently={deleteNotePermanently} />
                )}
                {isPopupOpen && <NotePopup note={currentNote} onSave={addOrUpdateNote} onClose={() => setIsPopupOpen(false)} />}
            </div>
        </div>
    );
}

export default App;
