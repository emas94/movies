import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { theme } from "../assets/styles/theme/theme";
import Header from "../components/Header";
// import Footer from "../components/Footer";
// import { useRootContext } from "../store/rootContext";

const StyledDefault = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  /* align-items: center; */
  background-color: ${props =>
    props.toggle ? props.theme.colors.white : props.theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  transition: background-color 0.3s, color 0.3s;
`;

const Default = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledDefault>
        <Header />
        {children}
        {/* <Footer /> */}
      </StyledDefault>
    </ThemeProvider>
  );
};

export default Default;
