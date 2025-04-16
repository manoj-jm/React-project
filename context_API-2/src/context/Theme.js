import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  lightTheme: () => {},
  darkTheme: () => {},
});

export const ThemeContextProvider = ThemeContext.Provider;

// custom hook
export default function useTheme() {
  // u don't need to import useContext and ThemeContext  , just this useTheme
  return useContext(ThemeContext);
}
