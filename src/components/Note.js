import React from 'react'
import "../styles.css";


export default function Note() {
  return (
    <div className="note-item">
         <h3>Note title</h3>
        <p>Note content</p>
        {/* <h3>${noteItem.title}</h3>
        <p>${noteItem.content}</p> */}
        <button type = "button" className = "btn delete-note-btn"> Delete </button>
        <button type = "button" className = "btn blue-note-btn"> Blue </button>
        <button type = "button" className = "btn red-note-btn"> Red </button>
        <button type = "button" className = "btn green-note-btn"> Green </button>
        <button type = "button" className = "btn edit-note-btn"> Edit </button>
    </div>
  )
}
