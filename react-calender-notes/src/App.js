import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [notes, setNotes] = useState([]);

  const formatDate = (date) => {
    return date.toISOString().split("T")[0];
  };

  useEffect(() => {
    const savedNotes =
      JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
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

  const filteredNotes = notes.filter(
    (note) => note.date === formatDate(selectedDate)
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Calendar Task Manager</h1>

      <CalendarView
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        notes={notes}
      />

      <NoteForm addNote={addNote} />

      <NoteList
        notes={filteredNotes}
        toggleComplete={toggleComplete}
        deleteNote={deleteNote}
      />
    </div>
  );
}

export default App;