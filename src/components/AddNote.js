import React, { useEffect, useState } from 'react'

export const AddNote = ({handleAddNote, editMode, targetNote}) => {
    const [noteText, setNoteText] = useState('');
    const [noteTitle, setNoteTitle] = useState('');

    useEffect(()=>{
        if(editMode === true){
            setNoteText(targetNote.content);
            setNoteTitle(targetNote.title);
        }
    },[editMode])

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
        <button id="add-note-btn" className="btn" onClick={handleSaveClick} type="button">${editMode === true ? "Update": "Add"}</button>
    </div>
</div>
  )
}
