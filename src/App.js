import "./styles.css";
import NotesList from "./components/NotesList";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { AddNote } from "./components/AddNote";


const App = () => {
  
  const [notes, setNotes] = useState([
   
]);

useEffect(()=>{
  const savedNotes = JSON.parse(localStorage.getItem("react-notes"));
  if(savedNotes){
    setNotes(savedNotes);
  }
},[])


useEffect(()=>{
  localStorage.setItem("react-notes", JSON.stringify(notes));
},[notes])

const handleAddNote = (noteObj) => {
  const newNote = {
    id: nanoid(),
    title: noteObj[0],
    content: noteObj[1],
    color: "default",
  }
  const newNotes = [...notes, newNote]
  setNotes(newNotes);
}

// const handleEditNote = (noteObj) => {
  
// }

const handleDeleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
}


  return (
    <div className="note">
      <h2>Note Taking App</h2>
        <AddNote handleAddNote={handleAddNote}/>
      {/* <div className="note-list"> */}
        <NotesList notes={notes} handleDeleteNote={handleDeleteNote}/>
      {/* </div> */}
    </div>
  );
  
};

export default App;