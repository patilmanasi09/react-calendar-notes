import {FaTrash, FaUndo, FaCheck,} from "react-icons/fa";

function NoteList({
  notes,
  toggleComplete,
  deleteNote,
}) {
  if (notes.length === 0) {
    return (
      <div className="alert alert-secondary">
        No notes for this date.
      </div>
    );
  }

  return (
    <>
      {notes.map((note) => (
        <div
          key={note.id}
          className="card mb-3 shadow-sm"
        >
          <div className="card-body d-flex justify-content-between align-items-center">
            <div>
              <span className="me-2">
                {note.completed ? "✅" : "📝"}
              </span>

              <span
                className={
                  note.completed
                    ? "text-decoration-line-through text-muted"
                    : ""
                }
              >
                {note.text}
              </span>
            </div>

            <div>
              <button
                className={`btn btn-sm me-2 ${
                  note.completed
                    ? "btn-warning"
                    : "btn-success"
                }`}
                onClick={() =>
                  toggleComplete(note.id)
                }
              >
                {note.completed ? (
                  <FaUndo />
                ) : (
                  <FaCheck />
                )}
              </button>

              <button
                className="btn btn-danger btn-sm"
                onClick={() =>
                  deleteNote(note.id)
                }
              >
                <FaTrash />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default NoteList;