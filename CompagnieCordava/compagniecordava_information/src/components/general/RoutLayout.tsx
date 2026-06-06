import { Outlet } from "react-router";
import Header from "./Header";
import useDarkModeToggle from "../../hooks/useDarkModeToggle";
import SpaceBlock from "./SpaceBlock";


const RoutLayout = () => {

  const {isDarkMode} = useDarkModeToggle();

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div
          className={`transition-colors duration-300 grow
              ${
                isDarkMode
                  ? "bg-[#121212] text-gray-100"
                  : "bg-gray-50 text-gray-900"
              }`}
        >
          <SpaceBlock />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default RoutLayout