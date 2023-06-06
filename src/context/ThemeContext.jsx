import { createContext, useState } from "react";

const ThemeContext = createContext();

// eslint-disable-next-line react/prop-types
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ===  "light" ? "dark" : "light"
  );
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };