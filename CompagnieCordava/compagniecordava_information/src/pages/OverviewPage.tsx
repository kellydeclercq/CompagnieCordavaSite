// pages/OverviewPage.tsx
import React from "react";
import GeneralInfo from "../components/HomePage/GeneralInfo";
import NewsComponent from "../components/HomePage/NewsComponent";
import useDarkModeToggle from "../hooks/useDarkModeToggle";
import { GetNewsData, GetOverviewData } from "../hooks/useOverviewData";

const OverviewPage: React.FC = () => {
  const { isDarkMode } = useDarkModeToggle();
  const { overViewData } = GetOverviewData();
  const { newsList } = GetNewsData();

  const pageStyle: React.CSSProperties = isDarkMode
    ? { backgroundColor: "#131313", minHeight: "100vh", padding: "80px 24px" }
    : { backgroundColor: "#f8f9fa", minHeight: "100vh", padding: "64px 24px" };

  return (
    <main style={pageStyle}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <GeneralInfo data={overViewData} isDarkMode={isDarkMode} />
        <NewsComponent news={newsList} isDarkMode={isDarkMode} />
      </div>
    </main>
  );
};

export default OverviewPage;
