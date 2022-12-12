import React, { useState } from 'react'

export const AddNote = ({handleAddNote}) => {
    const [noteText, setNoteText] = useState('');
    const [noteTitle, setNoteTitle] = useState('');

    const handleTextChange = (e) => {
        setNoteText(e.target.value);
    }

    const handleTitleChange = (e) => {
        setNoteTitle(e.target.value);
    }

    const handleSaveClick = () => {
        const noteObj = [noteTitle, noteText]
        if (noteText.trim().length > 0) {
            handleAddNote(noteObj);
            setNoteText('');
            setNoteTitle('');
        } else {
            alert("Please enter a note");
        }
    }

  return (
    <div className="note-input">
    <div className="note-wrapper">
        <input type="text" id = "note-title" onChange={handleTitleChange}  value={noteTitle} placeholder="Cool title here"/>
        <textarea  id="note-content" placeholder="Useful notes go here" rows="5" 
        value={noteText} onChange={handleTextChange}></textarea>
        <button id="add-note-btn" className="btn" onClick={handleSaveClick} type="button">Add Note</button>
    </div>
</div>
  )
}
