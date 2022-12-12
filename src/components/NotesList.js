
import React from 'react'
import Note from './Note'
import "../styles.css";

const NotesList = ({ notes , handleDeleteNote}) => {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <Note id={note.id} title={note.title} content={note.content} color={note.color} handleDeleteNote={handleDeleteNote}/>
      ))}

    </div>
  )
}


export default NotesList;