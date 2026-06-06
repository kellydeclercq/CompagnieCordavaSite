// components/HomePage/NewsComponent.tsx
import React from "react";
import type { NewsItem } from "../../types";


interface NewsComponentProps {
  news: NewsItem[];
  isDarkMode: boolean;
}

const NewsComponent: React.FC<NewsComponentProps> = ({ news, isDarkMode }) => {
  const containerTheme = isDarkMode
    ? {
        text: "#e5e2e1",
        title: "#dbfcff",
        fontFamilyTitle: "Montserrat, sans-serif",
      }
    : {
        text: "#191c1d",
        title: "#121212",
        fontFamilyTitle: "Montserrat, sans-serif",
      };

  const cardTheme = isDarkMode
    ? {
        bg: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        radius: "0.5rem",
        backdropFilter: "blur(20px)",
        fontFamilyBody: "Inter, sans-serif",
        dateColor: "#ffb1c3",
        boxShadow: "none",
      }
    : {
        bg: "#ffffff",
        border: "none",
        radius: "0px",
        backdropFilter: "none",
        fontFamilyBody: "Montserrat, sans-serif",
        dateColor: "#00F0FF",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
      };

  return (
    <section style={{ color: containerTheme.text }}>
      <h2
        style={{
          color: containerTheme.title,
          fontFamily: containerTheme.fontFamilyTitle,
          fontSize: "40px",
          fontWeight: 800,
          textTransform: "uppercase",
          letterSpacing: isDarkMode ? "-0.04em" : "-0.02em",
          margin: "0 0 48px 0",
        }}
      >
        Updates & Nieuws
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        {news.map((item) => (
          <article
            key={item.id}
            style={{
              backgroundColor: cardTheme.bg,
              border: cardTheme.border,
              borderRadius: cardTheme.radius,
              padding: "24px",
              backdropFilter: cardTheme.backdropFilter,
              boxShadow: cardTheme.boxShadow,
              fontFamily: cardTheme.fontFamilyBody,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                marginBottom: "12px",
              }}
            >
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: 600,
                  margin: 0,
                  fontFamily: containerTheme.fontFamilyTitle,
                }}
              >
                {item.title}
              </h3>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: isDarkMode ? "0.08em" : "0.1em",
                  color: cardTheme.dateColor,
                  textTransform: "uppercase",
                }}
              >
                {item.date.toLocaleDateString("nl-BE", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: "24px", margin: 0 }}>
              {item.content}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default NewsComponent;
