import { createContext, useState, type PropsWithChildren } from "react";

interface ToggleProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const DarkmodeToggleContext = createContext<ToggleProps | null>(null);

const UseDarkmodeToggleProvider = ({ children }: PropsWithChildren) => {

const [isDarkMode, setIsDarkMode] = useState(false);

const toggleTheme = () => { 
            setIsDarkMode((prevMode) => !prevMode);
        }
  
  return (
    <DarkmodeToggleContext.Provider
      value={{
        isDarkMode,
        toggleTheme,
      }}
    >
      {children}
    </DarkmodeToggleContext.Provider>
  );
};

export default UseDarkmodeToggleProvider;
