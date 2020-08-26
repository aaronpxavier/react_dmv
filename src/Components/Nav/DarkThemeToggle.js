import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_DARKTHEME } from "../../Constants/actionTypes";
import { func, string } from "prop-types";
import styled from "styled-components";
import { ReactComponent as MoonIcon } from "../../Images/sleep.svg";
import { ReactComponent as SunIcon } from "../../Images/sun.svg";
import { useDarkMode } from "./useDarkMode";
import { lightTheme, darkTheme } from "../GlobalTheme/Themes";
import ToggleContainer from "./DarkThemeToggle.styled";
var isDark = false;

const DarkThemeToggle = ({}) => {
  const darkThemeEnabled = useSelector(
    // (state) => state.preferences.darkThemeEnabled
    (state) => state.themeReducer.darkThemeEnabled
  );
  const dispatch = useDispatch();
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  //   console.log("The state");
  //   console.log(darkThemeEnabled);
  return (
    <p>
      {/* <input
        type="checkbox"
        checked={darkThemeEnabled}
        onChange={() => dispatch({ type: TOGGLE_DARKTHEME })}
      ></input>
      <span>Use Dark Theme</span> */}
      <ToggleContainer
        onClick={toggleTheme}
        onClick={() => dispatch({ type: TOGGLE_DARKTHEME })}
        darkThemeEnabled={darkThemeEnabled}
      >
        <SunIcon />
        <MoonIcon />
      </ToggleContainer>
    </p>
  );
};

// DarkThemeToggle.propTypes = {
//   theme: string.isRequired,
//   toggleTheme: func.isRequired,
// };

export default DarkThemeToggle;

//<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
//Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
//Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
