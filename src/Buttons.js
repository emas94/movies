import styled from "styled-components";
import { device } from "./assets/styles/theme/_breakpoints";
export const StyledButtonClear = styled.a`
  color: ${props =>
    props.active
      ? props.theme.colors.secondaryLight
      : props.theme.colors.white};
  background-color: transparent;
  font-family: "Poppins Medium";
  margin-right: ${props => (props.mobile ? "0" : "2rem")};
  cursor: pointer;
  transition: color 0.16s ease-in-out;
  font-size: ${props => props.size};
  position: relative;
  z-index: 0;
  font-size: ${props => (props.mobile ? "1.5rem" : "1.125rem")};
  :hover {
    color: ${({ theme }) => theme.colors.secondaryLight};
  }
  ${props =>
    props.mobile
      ? `
    ::after {
      position: absolute;
      content: '';
      width: 100%;
      height: 16px;
      bottom: 2px;
      left: 0;
      background-color: ${props.theme.colors.primary};
      z-index: -1
    `
      : null}
  }
`;
export const StyledButtonSolid = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.background};
  padding: 4px 16px;
  font-family: "Poppins Medium";
  border-radius: 2px;
  transition: color 0.14s ease;
  ${({ theme }) => theme.device.tablet} {
    margin-top: 30px;
  }
  :hover {
    color: ${({ theme }) => theme.colors.secondaryDark};
  }
`;
export const StyledButtonOutline = styled(StyledButtonSolid)`
  background-color: transparent;
  color: black;
  font-size: ${props => (props.large ? "1.375rem" : "1.125rem")};
  border-radius: 4px;
  padding: ${props => (props.large ? "8px 24px" : "4px 16px")};
  transition: all 0.2s ease-in-out;
  :hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.background};
  }
`;
