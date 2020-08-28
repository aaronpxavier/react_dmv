import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../GlobalTheme/Themes";

const DarkThemeProvider = ({ children }) => {
  //Get the darkThemeEnabled boolean from the store
  const darkThemeEnabled = useSelector(
    (state) => state.themeReducer.darkThemeEnabled
  );
  //ThemeProvider changes the style of all it's children
  //The theme is dependent of the darkThemeEnabled boolean
  return (
    <ThemeProvider theme={darkThemeEnabled ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
};

export default DarkThemeProvider;
