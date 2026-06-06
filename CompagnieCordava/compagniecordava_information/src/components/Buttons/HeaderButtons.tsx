import { NavLink } from "react-router"; 
import useDarkModeToggle from "../../hooks/useDarkModeToggle";
import type { HeaderButtonsProps } from "../../types";


const HeaderButtons = ({ item, to }: HeaderButtonsProps) => {
  const { isDarkMode } = useDarkModeToggle();

  return (
    <NavLink
      to={to}
      className={({
        isActive,
      }) => `px-5 py-2 w-50 rounded-full text-sm font-bold transition-transform hover:scale-105 active:scale-95 border-2 inline-block text-center
        ${
          isActive
            ? isDarkMode
              ? "border-[#16969d]"
              : "border-[#31cb92]"
            : "border-transparent"
        }
        ${
          isDarkMode
            ? "bg-[#d0f7fa] text-[#003a3d] hover:bg-[#b5f1f6]"
            : "bg-[#006b70] text-white hover:bg-[#005559]"
        }
      `}
    >
      {item}
    </NavLink>
  );
};

export default HeaderButtons;
