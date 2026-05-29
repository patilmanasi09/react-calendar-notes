import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CalendarView({
  selectedDate,
  setSelectedDate,
  notes,
  formatDate,
}) {
  return (
    <Calendar
      value={selectedDate}
      onChange={setSelectedDate}
      tileContent={({ date }) => {
        const hasNote = notes.some(
          (note) => note.date === formatDate(date)
        );

        return hasNote ? (
          <div
            style={{
              width: "8px",
              height: "8px",
              backgroundColor: "red",
              borderRadius: "50%",
              margin: "0 auto",
              marginTop: "2px",
            }}
          />
        ) : null;
      }}
    />
  );
}

export default CalendarView;