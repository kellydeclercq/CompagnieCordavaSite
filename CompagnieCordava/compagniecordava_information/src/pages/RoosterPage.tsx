import React from "react";
import CalendarComponent from "../components/rooster/CalenderComponent";
import EventListComponent from "../components/rooster/EventListComponent";

const RoosterPage: React.FC = () => {
  return (
    <div style={{ width: "100%", maxWidth: "1000px", margin: "0 auto" }}>
      <style>
        {`
          .rooster-wrapper {
            padding: 16px;
          }
          @media (min-width: 768px) {
            .rooster-wrapper {
              padding: 24px;
            }
          }
        `}
      </style>
      <div className="rooster-wrapper">
        <CalendarComponent />
        <EventListComponent />
      </div>
    </div>
  );
};

export default RoosterPage;
