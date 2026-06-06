import { useState } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import useDarkModeToggle from "../../hooks/useDarkModeToggle";
import HeaderButtons from "../Buttons/HeaderButtons";

const Header = () => {
  const { isDarkMode, toggleTheme } = useDarkModeToggle();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Rooster", path: "/Rooster" },
    { name: "Voorstellingen", path: "/Voorstellingen" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 w-[95%] max-w-6xl z-50 
        rounded-2xl px-6 py-4 flex items-center justify-between shadow-lg transition-colors duration-300
        ${
          isDarkMode
            ? "bg-[#161616] text-gray-100 border border-[#363e4a] shadow-green-950/20"
            : "bg-white text-gray-800 border border-gray-100"
        }`}
      >
        <div className="shrink-0 cursor-pointer">
          <h1
            className={`text-xl font-bold tracking-tight transition-colors duration-300
            ${isDarkMode ? "text-[#cbf4f9]" : "text-[#006064]"}`}
          >
            Compagnie Cordava
          </h1>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
          {navItems.map((item) => (
            <HeaderButtons key={item.name} item={item.name} to={item.path} />
          ))}
        </nav>

        <div className="flex items-center gap-5">
          {toggleTheme && (
            <button
              onClick={toggleTheme}
              className="text-lg text-gray-400 hover:text-current transition-colors"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <FiMoon /> : <FiSun />}
            </button>
          )}

          {/* Hamburger menu knop enkel zichtbaar op mobile */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-2xl text-gray-400 hover:text-current transition-colors focus:outline-none"
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>

      {/* Full-width Mobiel Menu buiten de afgeronde header */}
      {isMobileMenuOpen && (
        <div
          className={`fixed top-0 left-0 w-full z-40 pt-25 pb-8 px-6 shadow-2xl md:hidden rounded-b-3xl transition-colors duration-300
          ${
            isDarkMode
              ? "bg-[#161616] border-b border-[#363e4a]"
              : "bg-white border-b border-gray-200"
          }`}
        >
          <nav className="flex flex-col items-center gap-6">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="w-full flex justify-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <HeaderButtons item={item.name} to={item.path} />
              </div>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
