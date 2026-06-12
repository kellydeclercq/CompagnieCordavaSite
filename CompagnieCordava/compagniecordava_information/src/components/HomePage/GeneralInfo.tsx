// components/HomePage/GeneralInfo.tsx
import React from "react";
import type { GeneralInfoData } from "../../types";



interface GeneralInfoProps {
  data: GeneralInfoData;
  isDarkMode: boolean;
}

const GeneralInfo: React.FC<GeneralInfoProps> = ({ data, isDarkMode }) => {
  const theme = isDarkMode
    ? {
        bg: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        text: "#e5e2e1",
        title: "#dbfcff",
        radius: "1.5rem",
        backdropFilter: "blur(20px)",
        fontFamilyTitle: "Montserrat, sans-serif",
        fontFamilyBody: "Inter, sans-serif",
        boxShadow: "none",
      }
    : {
        bg: "#ffffff",
        border: "none",
        text: "#191c1d",
        title: "#00F0FF",
        radius: "1.5rem",
        backdropFilter: "none",
        fontFamilyTitle: "Montserrat, sans-serif",
        fontFamilyBody: "Montserrat, sans-serif",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
      };

  return (
    <section
      style={{
        backgroundColor: theme.bg,
        border: theme.border,
        borderRadius: theme.radius,
        color: theme.text,
        padding: "24px",
        backdropFilter: theme.backdropFilter,
        boxShadow: theme.boxShadow,
        fontFamily: theme.fontFamilyBody,
        marginBottom: isDarkMode ? "80px" : "120px",
      }}
    >
      <h2
        style={{
          color: theme.title,
          fontFamily: theme.fontFamilyTitle,
          fontSize: "32px",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: isDarkMode ? "-0.02em" : "-0.01em",
          margin: "0 0 16px 0",
        }}
      >
        {data.title}
      </h2>
      <p style={{ fontSize: "18px", lineHeight: "28px", margin: "0 0 12px 0" }}>
        {data.description}
      </p>
     
    </section>
  );
};

export default GeneralInfo;
