import React, { useState} from 'react';
// import {Alert} from 'react-bootstrap'

const NotePopup = ({ note, onSave, onClose }) => {
    const [title, setTitle] = useState(note ? note.title : '');
    const [tagline, setTagline] = useState(note ? note.tagline : '');
    const [body, setBody] = useState(note ? note.body : '');
    const [pinned] = useState(note ? note.pinned : false);

    const handleSave = () => {
        onSave({ id: note?.id, title, tagline, body, pinned });
    };

    return (
        <div className="note-popup">
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="Tagline" value={tagline} onChange={(e) => setTagline(e.target.value)} />
            <textarea placeholder="Body" value={body} onChange={(e) => setBody(e.target.value)} />
            {/* <label>
                Pin Note
                <input type="checkbox" checked={pinned} onChange={(e) => setPinned(e.target.checked)} />
            </label> */}
            <button className='save-btn' onClick={handleSave}>Save</button>
            <button className='cancel-btn' onClick={onClose}>Cancel</button>
            {/* <Alert variant="success">
            <Alert.Heading>Hey, nice to see you</Alert.Heading>
                <p>
                    Aww yeah, you successfully read this important alert message. This
                    example text is going to run a bit longer so that you can see how
                    spacing within an alert works with this kind of content.
                </p>
                <hr />
                <p className="mb-0">
                    Whenever you need to, be sure to use margin utilities to keep things
                    nice and tidy.
                </p>
            </Alert> */}
        </div>
    );
};

export default NotePopup;
