import { useContext } from 'react'
import { DarkmodeToggleContext  } from "../context/DarkmodeToggleContext";

const useDarkModeToggle = () => {
  const darkmodeToggleContext = useContext(DarkmodeToggleContext);

  if (!darkmodeToggleContext) {
    throw new Error(
      "savedTrailsContext must be wrapped in a SavedTrailsProvider",
    );
  }

  return darkmodeToggleContext;
}

export default useDarkModeToggle