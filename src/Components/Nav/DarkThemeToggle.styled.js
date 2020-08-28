import styled from "styled-components";
import { useSelector } from "react-redux";

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 6rem;
  height: 3rem;
  outline: 0;
  ${"" /* width: 8rem;
  height: 4rem; */}

  svg {
    height: auto;
    width: 2.5rem;
    transition: all 0.3s linear;

    // sun icon
    &:first-child {
      transform: ${({ darkThemeEnabled }) =>
        darkThemeEnabled ? "translateY(-100px)" : "translateY(-4px)"};
    }

    // moon icon
    &:nth-child(2) {
      transform: ${({ darkThemeEnabled }) =>
        darkThemeEnabled ? "translateY(-4px)" : "translateY(100px)"};
    }
  }
`;

export default ToggleContainer;
