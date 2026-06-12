import React, { useRef, useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import nlLocale from "@fullcalendar/core/locales/nl";
import useDarkModeToggle from "../../hooks/useDarkModeToggle";
import { GetEvents } from "../../hooks/useCalenderEvents";

const CalendarComponent: React.FC = () => {
  const { isDarkMode } = useDarkModeToggle();
  const events = GetEvents();
  const calendarRef = useRef<FullCalendar>(null);

  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = event.target.value;
    if (selectedDate && calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      calendarApi.gotoDate(selectedDate);
    }
  };

  const wrapperStyle: React.CSSProperties = isDarkMode
    ? {
        backgroundColor: "transparent",
        border: "1px solid rgba(255, 255, 255, 0.15)",
        borderRadius: "1.5rem",
        color: "#e5e2e1",
        backdropFilter: "blur(20px)",
        marginTop: "24px",
      }
    : {
        backgroundColor: "#ffffff",
        border: "none",
        borderRadius: "1rem", // Iets modernere afgeronde hoek voor de lichte container
        color: "#191c1d",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
        marginTop: "24px",
      };

  const dateInputStyle: React.CSSProperties = {
    backgroundColor: isDarkMode ? "rgba(255, 255, 255, 0.05)" : "#f8f9fa",
    color: isDarkMode ? "#e5e2e1" : "#191c1d",
    border: `1px solid ${isDarkMode ? "rgba(255, 255, 255, 0.1)" : "#e1e3e4"}`,
    padding: "8px 16px", // Iets meer padding voor een moderne look
    fontFamily: isDarkMode ? "Inter, sans-serif" : "Montserrat, sans-serif",
    fontSize: "14px",
    fontWeight: 600,
    textTransform: "uppercase",
    outline: "none",
    cursor: "pointer",
    borderRadius: "9999px", // <-- Ronde hoeken voor de input
    width: isMobile ? "100%" : "auto",
  };

  return (
    <div style={wrapperStyle} className="calendar-responsive-wrapper">
      <style>
        {`
          .calendar-responsive-wrapper {
            padding: 16px;
          }
          @media (min-width: 768px) {
            .calendar-responsive-wrapper {
              padding: 24px;
            }
          }

          .fc {
            --fc-page-bg-color: transparent;
            --fc-neutral-bg-color: ${isDarkMode ? "rgba(255, 255, 255, 0.05)" : "#f3f4f5"};
            --fc-neutral-text-color: ${isDarkMode ? "#b9cacb" : "#3b494b"};
            --fc-border-color: ${isDarkMode ? "rgba(255, 255, 255, 0.1)" : "#e1e3e4"};
            --fc-button-text-color: ${isDarkMode ? "#00363a" : "#121212"};
            --fc-button-bg-color: ${isDarkMode ? "#dbfcff" : "#00F0FF"};
            --fc-button-border-color: ${isDarkMode ? "#dbfcff" : "#00F0FF"};
            --fc-button-hover-bg-color: ${isDarkMode ? "#00dbe9" : "#00dbe9"};
            --fc-button-hover-border-color: ${isDarkMode ? "#00dbe9" : "#00dbe9"};
            --fc-button-active-bg-color: ${isDarkMode ? "#00F0FF" : "#00F0FF"};
            --fc-button-active-border-color: ${isDarkMode ? "#00F0FF" : "#00F0FF"};
            
            --fc-event-bg-color: ${isDarkMode ? "#00dbe9" : "#00F0FF"};
            --fc-event-border-color: ${isDarkMode ? "#00dbe9" : "#00F0FF"};
            --fc-event-text-color: ${isDarkMode ? "#002022" : "#121212"};
            
            font-family: ${isDarkMode ? "Inter, sans-serif" : "Montserrat, sans-serif"};
          }

          /* --- Styling voor de FullCalendar Knoppen --- */
          .fc .fc-button {
            border-radius: 9999px; /* <-- Maakt de knoppen volledig rond (pill shape) */
            padding: 8px 16px;     /* <-- Zorgt voor voldoende 'ademruimte' */
            text-transform: uppercase;
            font-weight: 600;
            letter-spacing: 0.05em; /* Optioneel: iets meer spatie tussen letters voor een strakkere look */
            transition: all 0.2s ease; /* Zachte overgang bij hover */
          }
          
          /* FullCalendar plakt knoppen standaard aan elkaar vast (button groups). 
             Om de ronde hoeken overal te behouden en ze niet te laten overvloeien, 
             moeten we de standaard marges/borders tussen gegroepeerde knoppen resetten. */
          .fc .fc-button-group > .fc-button:not(:last-child) {
            border-bottom-right-radius: 9999px;
            border-top-right-radius: 9999px;
            margin-right: 8px; /* Ruimte TUSSEN de knoppen */
          }
          .fc .fc-button-group > .fc-button:not(:first-child) {
            border-bottom-left-radius: 9999px;
            border-top-left-radius: 9999px;
            margin-left: 0px; 
          }
          
          /* Knoppen iets verkleinen als ze worden ingedrukt */
          .fc .fc-button:active {
            transform: scale(0.95);
          }

          /* --- Styling voor Events IN de kalender --- */
          .fc-timegrid-event, .fc-daygrid-event {
            border-radius: 6px; /* <-- Maakt de events zelf ook iets zachter/ronder */
            padding: 2px 4px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1); /* Subtiel schaduwtje op de events */
          }

          .custom-date-picker:focus {
            outline: 2px solid ${isDarkMode ? "#dbfcff" : "#00F0FF"} !important;
            outline-offset: 2px; /* Aangepast voor ronde input */
          }
          
          ::-webkit-calendar-picker-indicator {
            filter: ${isDarkMode ? "invert(1)" : "none"};
            cursor: pointer;
          }

          @media (max-width: 768px) {
            .fc .fc-toolbar {
              flex-direction: column;
              gap: 12px;
            }
            .fc .fc-toolbar-title {
              font-size: 1.2rem !important;
            }
            .date-picker-container {
              flex-direction: column;
              align-items: stretch !important;
            }
            /* Op mobiel de knoppen iets kleiner maken zodat ze beter passen */
            .fc .fc-button {
              padding: 6px 12px;
              font-size: 0.85em;
            }
          }
        `}
      </style>

      <div
        className="date-picker-container"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          marginBottom: "16px",
          gap: "12px",
        }}
      >
        <label
          style={{
            fontFamily: isDarkMode
              ? "Inter, sans-serif"
              : "Montserrat, sans-serif",
            fontSize: "14px",
            fontWeight: 600,
            textTransform: "uppercase",
          }}
        >
          Spring naar datum:
        </label>
        <input
          type="date"
          className="custom-date-picker"
          onChange={handleDateChange}
          style={dateInputStyle}
        />
      </div>

      <FullCalendar
        key={isMobile ? "mobile" : "desktop"}
        ref={calendarRef}
        plugins={[timeGridPlugin, dayGridPlugin]}
        initialView={isMobile ? "timeGridDay" : "timeGridWeek"}
        events={events}
        locale={nlLocale}
        slotLabelFormat={{
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }}
        eventTimeFormat={{
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }}
        slotMinTime="08:00:00"
        slotMaxTime="23:00:00"
        allDaySlot={false}
        weekends={true}
        firstDay={1}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: isMobile
            ? "dayGridMonth,timeGridDay"
            : "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        height="auto"
      />
    </div>
  );
};

export default CalendarComponent;
