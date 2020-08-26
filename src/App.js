import React, { Component, useState, useEffect } from "react";
import routes from "./routes";
import { withRouter } from "react-router-dom";
import NightMode from "./Components/Nav/NavBar";
import NavBar from "./Components/Nav/NavBar";
import Footer from "./Components/Nav/Footer";
import "./App.css";
// import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Components/GlobalTheme/globalStyles";
// import { lightTheme, darkTheme } from "./Components/GlobalTheme/Themes";
//import { getTheme, getNightMode } from "./Redux/Reducers/themeReducer";
// import { setTheme, TOGGLE_DARKTHEME } from "./Redux/Actions/themeActions";
import { useSelector, Provider } from "react-redux";
import DarkThemeProvider from "./Components/Nav/DarkThemeProvider";
// import DarkThemeToggle from "./Components/Nav/DarkThemeToggle";
import configureStore from "./Redux/Store/configureStore";
const store = configureStore();

export class App extends Component {
  render = () => (
    <div id="all">
      <Provider store={store}>
        <DarkThemeProvider>
          <GlobalStyles />
          <NavBar />
          <div id="dd">{routes}</div>
          <Footer />
        </DarkThemeProvider>
      </Provider>
    </div>
  );
}

export default withRouter(App);

// const App = (props) => {
//   const [theme, setTheme] = useState("light");
//   const themeToggler = () => {
//     theme === "light" ? setTheme("dark") : setTheme("light");
//   };
//   // console.log(useSelector(getTheme));
//   return (
//     <div id="all">
//       <Provider store={store}>
//         <DarkThemeProvider>
//           <GlobalStyles />
//           <NavBar />
//           <p>test</p>
//           <p>test</p>
//           <p>test</p>
//           <p>test</p>
//           <button onClick={themeToggler}>Switch Theme</button>
//           <DarkThemeToggle />
//           <div id="dd">{routes}</div>
//           <Footer />
//         </DarkThemeProvider>
//       </Provider>
//     </div>
//   );
// };
// export default App;

// function App() {
//   const [theme, setTheme] = useState("light");
//   const themeToggler = () => {
//     theme === "light" ? setTheme("dark") : setTheme("light");
//   };
//   // const darkThemeEnabled = useSelector(
//   //   (state) => state.preferences.darkThemeEnabled
//   // );
//   const darkThemeEnabled = false;
//   // console.log(useSelector(getTheme));
//   console.log("The store is");
//   console.log(store);
//   return (
//     <div id="all">
//       <Provider store={store}>
//         <ThemeProvider
//           theme={{ theme: darkThemeEnabled ? darkTheme : lightTheme }}
//         >
//           <GlobalStyles />
//           <NavBar />
//           <p>test</p>
//           <p>test</p>
//           <p>test</p>
//           <p>test</p>
//           <button onClick={themeToggler}>Switch Theme</button>
//           <div id="dd">{routes}</div>
//           <Footer />
//         </ThemeProvider>
//       </Provider>
//     </div>
//   );
// }
// export default App;
