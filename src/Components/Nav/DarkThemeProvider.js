import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../GlobalTheme/Themes";

const DarkThemeProvider = ({ children }) => {
  const darkThemeEnabled = useSelector(
    (state) => state.themeReducer.darkThemeEnabled
  );
  //ThemeProvider changes the style of all it's children
  return (
    <ThemeProvider theme={darkThemeEnabled ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
};

export default DarkThemeProvider;
