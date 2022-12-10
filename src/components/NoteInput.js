import "../styles.css";

const NoteInput = () => {
    return (
        <div>
            <h3>Add a Note</h3>
            <div className="note-wrapper">
                <input type="text" id = "note-title" placeholder="Cool title here"/>
                <textarea  id="note-content" placeholder="Useful notes go here" rows="5"></textarea>
                <button id="add-note-btn" className="btn" type="button">Add Note</button>
            </div>
        </div>
    );
}

export default NoteInput;