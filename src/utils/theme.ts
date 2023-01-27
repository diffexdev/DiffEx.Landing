import {Button, createTheme, responsiveFontSizes, styled as smc} from "@mui/material";
import styled from "styled-components";

export const lightTheme = responsiveFontSizes(createTheme());
export const darkTheme = responsiveFontSizes(createTheme({
    palette: {
        mode: "dark"
    }
}));

export const Section = styled.div`
  height: 100vh;
  width: 100vw;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Btn = smc(Button)`
  margin: 1em;
  padding: 1em;

  background-size: 100%;
  background-image: linear-gradient(90deg, rgb(111, 119, 208) 0%, rgb(142, 111, 208) 100%);
  border: transparent;
  border-radius: 20px;
  position: relative;
  z-index: 100;
  transition: all 0.25s;
  
  color: whitesmoke;

  &:hover {
    transform: scale(1.05);  
    transition: all 0.25s;
    box-shadow:
        12px 10px 40px -8px rgb(142, 111, 208),
        -10px 10px 40px -8px rgb(0, 111, 255),
        -10px -7px 40px -8px rgb(0, 111, 255);
  }
`;
