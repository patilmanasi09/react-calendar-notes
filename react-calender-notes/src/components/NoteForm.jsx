import { useState } from "react";

function NoteForm({ addNote }) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    addNote(text);
    setText("");
  };

  return (
    <div className="input-group mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="Enter your note..."
        value={text}
        onChange={(e) =>
          setText(e.target.value)
        }
      />

      <button
        className="btn btn-primary"
        onClick={handleSubmit}
      >
        Add Note
      </button>
    </div>
  );
}

export default NoteForm;