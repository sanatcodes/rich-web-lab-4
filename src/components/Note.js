import React from 'react'
import "../styles.css";


const Note = ( {id, title, content,color, handleDeleteNote}) => {
  
  const colorMap = {
    blue: "#7ec4cf",
    red: "#ff7477",
    green: "#98b08b",
    default: "#fff"
  }

  const changeColor = (color,e) => {
    e.target.parentElement.style.backgroundColor = colorMap[color];
  }

  

  return (
    <div className="note-item" 
    style={{backgroundColor: `${colorMap[color]}`}}
    >
        <h3>{title}</h3>
        <p>{content}</p>  
        {/* <h3>title</h3>
        <p>content</p> */}
        <button type = "button" className = "btn delete-note-btn" onClick={()=> handleDeleteNote(id)} > Delete </button>
        <button type = "button" className = "btn blue-note-btn" onClick={(e)=> changeColor('blue',e)} >Blue </button>
        <button type = "button" className = "btn red-note-btn" onClick={(e)=> changeColor('red',e)}> Red </button>
        <button type = "button" className = "btn green-note-btn" onClick={(e)=> changeColor('green',e)}> Green </button>
        <button type = "button" className = "btn edit-note-btn"> Edit </button>
    </div>
  ) 
}

export default Note;

