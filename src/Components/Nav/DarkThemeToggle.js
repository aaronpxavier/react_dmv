import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_DARKTHEME } from "../../Constants/actionTypes";
import { func, string } from "prop-types";
import styled from "styled-components";
import { ReactComponent as MoonIcon } from "../../Images/sleep.svg";
import { ReactComponent as SunIcon } from "../../Images/sun.svg";
import { lightTheme, darkTheme } from "../GlobalTheme/Themes";
import ToggleContainer from "./DarkThemeToggle.styled";
// import { Link, withRouter } from "react-router-dom";
var isDark = false;

//This is used to refresh the component after switching to dark theme
function rePage() {
  var lnk = window.location.href;
  window.location.href = "#/blankScreen";
  setTimeout(function () {
    window.location.href = lnk;
  }, 1);
}

const DarkThemeToggle = ({}) => {
  const darkThemeEnabled = useSelector(
    (state) => state.themeReducer.darkThemeEnabled
  );
  const dispatch = useDispatch();
  return (
    <p>
      <ToggleContainer
        onClick={() => {
          dispatch({ type: TOGGLE_DARKTHEME });
          rePage();
        }}
        darkThemeEnabled={darkThemeEnabled}
      >
        <SunIcon />
        <MoonIcon />
      </ToggleContainer>
    </p>
  );
};

export default DarkThemeToggle;

//<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
//Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
//Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
