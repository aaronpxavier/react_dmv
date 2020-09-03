import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
 #AppBar{
  background-color: ${({ theme }) => theme.navBodColor};
  color: ${({ theme }) => theme.navWordColor};
 }
 #Tabs #Tab{
  color: ${({ theme }) => theme.navWordColor};
 }
 #footContainer{
  background-color: ${({ theme }) => theme.navBodColor};
  ${"" /* color: ${({ theme }) => theme.navWordColor}; */}
 }
 #footer p{
  color: ${({ theme }) => theme.navWordColor};
 }
 #MobileMenu{
  background-color: ${({ theme }) => theme.navBodColor};
  color: ${({ theme }) => theme.navWordColor};

 }
 #MobileIcons{
  color: ${({ theme }) => theme.navWordColor};

 }
 #tContainer{
 
  ${"" /* background-color: ${({ theme }) => theme.body}; */}

 }
 #tContainer #dTable{
   ${"" /* this does not work yet */}
  page-Size: 3;
  main: ${({ theme }) => "red"};
  color: ${({ theme }) => "blue"};
  background-color: ${({ theme }) => "red"};
  backgroundColor: ${({ theme }) => "red"};
 }

  `;

//need to find a way to change datatables style.

// export const GlobalStyles = createGlobalStyle`
//   *,
//   *::after,
//   *::before {
//     box-sizing: border-box;
//   }

//   body {
//     ${"" /* align-items: center; */}
//     background: ${({ theme }) => theme.body};
//     color: ${({ theme }) => theme.text};
//     display: flex;
//     ${
//       "" /* flex-direction: column;
//     justify-content: center;
//     height: 100vh; */
//     }
//     margin: 0;
//     padding: 0;
//     font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
//     transition: all 0.25s linear;
//   }
//   `;
