import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_DARKTHEME } from "../../Constants/actionTypes";
import { ReactComponent as MoonIcon } from "../../Images/sleep.svg";
import { ReactComponent as SunIcon } from "../../Images/sun.svg";
import ToggleContainer from "./DarkThemeToggle.styled";

//This is used to refresh the component after switching to dark theme
function rePage() {
  var lnk = window.location.href;
  window.location.href = "#/blankScreen";
  setTimeout(function () {
    window.location.href = lnk;
  }, 1);
}

function setSession(darkThemeEnabled) {
  // if (isNaN(sessionStorage.getItem("darkTheme"))) {
  //   sessionStorage.setItem("darkTheme", false);
  // } else {
  //   this.setState({ darktheme: !sessionStorage.getItem("darkTheme") });
  // }
  sessionStorage.setItem("darkTheme", darkThemeEnabled);
}

const DarkThemeToggle = ({}) => {
  //Get the darkThemeEnabled boolean from the store
  const darkThemeEnabled = useSelector(
    (state) => state.themeReducer.darkThemeEnabled
  );
  const dispatch = useDispatch();

  return (
    <p>
      <ToggleContainer
        //onClick triggers darktheme action as well as call rePage
        onClick={() => {
          dispatch({ type: TOGGLE_DARKTHEME });
          rePage();
          setSession(darkThemeEnabled);
        }}
        //this lets the sun & moon to swap by giving the style sheet
        //the is 'darkThemeEnabled' boolean
        darkThemeEnabled={darkThemeEnabled}
      >
        <SunIcon />
        <MoonIcon />
      </ToggleContainer>
    </p>
  );
};

export default DarkThemeToggle;

//Credit for the icons. flaticon has great icons tbh.
//<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
//Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
//Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
