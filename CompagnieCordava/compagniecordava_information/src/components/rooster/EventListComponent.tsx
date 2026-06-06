// components/rooster/EventListComponent.tsx
import React from "react";
import useDarkModeToggle from "../../hooks/useDarkModeToggle";
import { GetEvents } from "../../hooks/useCalenderEvents";

interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  description?: string; // Nieuw veld toegevoegd
}

const EventListComponent: React.FC = () => {
  const { isDarkMode } = useDarkModeToggle();
  const events = GetEvents();

  const now = new Date();
  now.setHours(0, 0, 0, 0);

  const futureEvents = events
    .filter((event: CalendarEvent) => event.start >= now)
    .sort(
      (a: CalendarEvent, b: CalendarEvent) =>
        a.start.getTime() - b.start.getTime(),
    );

  const groupedEvents = futureEvents.reduce(
    (acc: Record<string, CalendarEvent[]>, event: CalendarEvent) => {
      const monthYear = event.start.toLocaleString("nl-BE", {
        month: "long",
        year: "numeric",
      });
      if (!acc[monthYear]) {
        acc[monthYear] = [];
      }
      acc[monthYear].push(event);
      return acc;
    },
    {},
  );

  const containerStyle: React.CSSProperties = {
    marginTop: "48px",
    fontFamily: isDarkMode ? "Inter, sans-serif" : "Montserrat, sans-serif",
  };

  const monthHeaderStyle: React.CSSProperties = {
    color: isDarkMode ? "#dbfcff" : "#00F0FF",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 700,
    textTransform: "uppercase",
    borderBottom: `1px solid ${isDarkMode ? "rgba(255, 255, 255, 0.1)" : "#e1e3e4"}`,
    paddingBottom: "8px",
    marginBottom: "16px",
    marginTop: "32px",
  };

  const cardStyle: React.CSSProperties = isDarkMode
    ? {
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "0.5rem",
        backdropFilter: "blur(20px)",
        marginBottom: "16px",
        color: "#e5e2e1",
      }
    : {
        backgroundColor: "#ffffff",
        border: "none",
        borderRadius: "0px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
        marginBottom: "16px",
        color: "#191c1d",
      };

  const timeStyle: React.CSSProperties = {
    fontSize: "14px",
    fontWeight: 600,
    color: isDarkMode ? "#b9cacb" : "#3b494b",
    marginBottom: "8px",
    display: "block",
  };

  const titleStyle: React.CSSProperties = {
    fontWeight: 600,
    margin: 0,
    color: isDarkMode ? "#e5e2e1" : "#191c1d",
  };

  // Styling voor de nieuwe description
  const descriptionStyle: React.CSSProperties = {
    margin: "8px 0 0 0",
    color: isDarkMode ? "#b9cacb" : "#3b494b", // on-surface-variant voor subtiliteit
    lineHeight: "1.5",
    fontWeight: 400,
  };

  const formatEventTime = (start: Date, end: Date) => {
    const dateOpts: Intl.DateTimeFormatOptions = {
      weekday: "long",
      day: "numeric",
      month: "long",
    };
    const timeOpts: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
    };

    const dateStr = start.toLocaleDateString("nl-BE", dateOpts);
    const startTimeStr = start.toLocaleTimeString("nl-BE", timeOpts);
    const endTimeStr = end.toLocaleTimeString("nl-BE", timeOpts);

    return `${dateStr.charAt(0).toUpperCase() + dateStr.slice(1)} • ${startTimeStr} - ${endTimeStr}`;
  };

  if (Object.keys(groupedEvents).length === 0) {
    return (
      <div style={containerStyle}>
        <p style={{ color: isDarkMode ? "#b9cacb" : "#3b494b" }}>
          Er zijn momenteel geen toekomstige events gepland.
        </p>
      </div>
    );
  }

  return (
    <div style={containerStyle} className="event-list-container">
      <style>
        {`
          .event-list-container .month-header {
            font-size: 20px;
          }
          .event-list-container .event-card {
            padding: 16px;
          }
          .event-list-container .event-title {
            font-size: 16px;
          }
          .event-list-container .event-description {
            font-size: 6px;
          }
          @media (min-width: 768px) {
            .event-list-container .month-header {
              font-size: 24px;
            }
            .event-list-container .event-card {
              padding: 24px;
            }
            .event-list-container .event-title {
              font-size: 18px;
            }
            .event-list-container .event-description {
              font-size: 12px;
            }
          }
        `}
      </style>

      {Object.entries(groupedEvents).map(([monthYear, monthEvents]) => (
        <div key={monthYear}>
          <h3 style={monthHeaderStyle} className="month-header">
            {monthYear}
          </h3>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {monthEvents.map((event: CalendarEvent) => (
              <div key={event.id} style={cardStyle} className="event-card">
                <span style={timeStyle}>
                  {formatEventTime(event.start, event.end)}
                </span>
                <h4 style={titleStyle} className="event-title">
                  {event.title}
                </h4>

                {event.description && (
                  <p style={descriptionStyle} className="event-description">
                    {event.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventListComponent;
