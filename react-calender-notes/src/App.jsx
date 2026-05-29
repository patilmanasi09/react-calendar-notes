import { useState, useEffect } from "react";
import CalendarView from "./components/CalendarView";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [notes, setNotes] = useState([]);

  const formatDate = (date) =>
    date.toISOString().split("T")[0];

  useEffect(() => {
    const savedNotes =
      JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    if (!text.trim()) return;

    const newNote = {
      id: Date.now(),
      text,
      date: formatDate(selectedDate),
      completed: false,
    };

    setNotes([...notes, newNote]);
  };

  const toggleComplete = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id
          ? { ...note, completed: !note.completed }
          : note
      )
    );
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const currentNotes = notes.filter(
    (note) => note.date === formatDate(selectedDate)
  );

  return (
    <div className="container py-4">
      <div className="card shadow-lg border-0">
        <div className="card-body">
          <h1 className="text-center mb-4">
            📅 Calendar Notes App
          </h1>

          <div className="row">
            <div className="col-lg-5">
              <CalendarView
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                notes={notes}
                formatDate={formatDate}
              />
            </div>

            <div className="col-lg-7">
              <NoteForm addNote={addNote} />

              <NoteList
                notes={currentNotes}
                toggleComplete={toggleComplete}
                deleteNote={deleteNote}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;