import "./styles.css";
import NoteInput from "./components/NoteInput";
import NotesList from "./components/NotesList";

const App = () => {
  return (
    <div className="note">
      <h2>Note Taking App</h2>
      <div className="note-input">
        <NoteInput/>
      </div>
      <div className="note-list">
        <NotesList/>
      </div>
    </div>
  );
  
};

export default App;