import React from "react";
import CalendarComponent from "../components/rooster/CalenderComponent";
import EventListComponent from "../components/rooster/EventListComponent";
import useDarkModeToggle from "../hooks/useDarkModeToggle";

const RoosterPage: React.FC = () => {
  const { isDarkMode } = useDarkModeToggle();


  const titleStyle: React.CSSProperties = {
    color: isDarkMode ? "#dbfcff" : "#121212",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 500,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    borderBottom: `4px solid ${isDarkMode ? "rgba(255, 255, 255, 0.1)" : "#e1e3e4"}`,
    paddingBottom: "16px",
    marginTop: "64px", 
    marginBottom: "-16px", 
  };

  return (
    <div style={{ width: "100%", maxWidth: "1000px", margin: "0 auto" }}>
      <style>
        {`
          .rooster-wrapper {
            padding: 16px;
          }
          /* Mobiele tekstgrootte voor de titel */
          .overview-title {
            font-size: 20px;
          }

          @media (min-width: 768px) {
            .rooster-wrapper {
              padding: 24px;
            }
            /* Desktop tekstgrootte voor de titel */
            .overview-title {
              font-size: 28px;
            }
          }
        `}
      </style>

      <div className="rooster-wrapper">
        <CalendarComponent />

        <h2 className="overview-title" style={titleStyle}>
          Overview van alle repetities en shows
        </h2>

        <EventListComponent />
      </div>
    </div>
  );
};

export default RoosterPage;
