import "./styles.css";
import NotesList from "./components/NotesList";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { AddNote } from "./components/AddNote";


const App = () => {
  
  const [notes, setNotes] = useState([]);

useEffect(()=>{
  const savedNotes = JSON.parse(localStorage.getItem("react-notes"));
  if(savedNotes){
    setNotes(savedNotes);
  }
},[])


useEffect(()=>{
  localStorage.setItem("react-notes", JSON.stringify(notes));
  console.log(targetNote);
},[notes])

const handleAddNote = (noteObj) => {
  if(editMode === true){
    const editedNotes = notes.map((note) => {
      if(note.id === noteObj.id){
          note.title = noteObj[0];
          note.content = noteObj[1];
        }
      })
      setNotes(editedNotes);
    } else{
    const newNote = {
      id: nanoid(),
      title: noteObj[0],
      content: noteObj[1],
      color: "default",
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes);
  }
  
}

const [editMode, setEditMode] = useState(false);

const [targetNote, setTargetNote] = useState({
  title: "",
  content: "",
})

const handleEditNote = (id) => {
  const note = notes.find((note) => note.id === id);
  console.log("any", note.title);
  const targetNote = {
    title: note.title,
    content: note.content,
  }
  setTargetNote(targetNote)
  setEditMode(true);
}

const handleDeleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
}


  return (
    <div className="note">
      <h2>Note Taking App</h2>
        <AddNote handleAddNote={handleAddNote} handleEditNote={handleEditNote} editMode={editMode} targetNote={targetNote}/>
      {/* <div className="note-list"> */}
        <NotesList notes={notes} handleDeleteNote={handleDeleteNote} handleEditNote={handleEditNote}/>
      {/* </div> */}
    </div>
  );
  
};

export default App;