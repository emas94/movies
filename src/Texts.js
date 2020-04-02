import styled from "styled-components";
import { colors } from "./assets/styles/theme/_colors";
import { device } from "./assets/styles/theme/_breakpoints";
export const StyledHeroHeading = styled.p`
  font-size: 4rem;
  font-family: "Poppins Bold";
  color: ${props => (props.gold ? colors.secondaryLight : colors.background)};
  margin: ${props => props.margin};
  ${device.tablet} {
    font-size: 2.625rem;
  }
`;
export const StyledHeroSubheading = styled.p`
  font-size: 3.5rem;
  font-family: ${props => (props.medium ? "Poppins Medium" : "Poppins Bold")};
  color: ${props => (props.gold ? colors.secondaryLight : colors.whiteCold)};
  margin: ${props => props.margin};

  ${device.tablet} {
    font-size: 2rem;
  }
`;
export const StyledFooterTitle = styled.p`
  font-size: 3rem;
  font-family: "Poppins Bold";
  color: ${colors.primaryDark};
  margin: ${props => props.margin};
  ${device.tablet} {
    font-size: 1.5rem;
  }
`;
export const StyledSectionHeading = styled.p`
  font-size: 2.625rem;
  font-family: ${props => (props.bold ? "Poppins Bold" : "Poppins Medium")};
  color: ${props =>
    props.gold
      ? colors.secondaryLight
      : props.goldDark
      ? colors.secondary
      : props.dark
      ? colors.primaryDark
      : colors.whiteCold};
  margin: ${props => props.margin};
  ${device.tablet} {
    font-size: 1.5rem;
  }
`;
export const StyledTitle = styled.p`
  font-size: ${props => (props.large ? "2rem" : "1.5rem")};
  font-family: "Poppins Medium";
  color: ${props =>
    props.dark
      ? colors.primaryDark
      : props.light
      ? colors.primary
      : props.gold
      ? colors.secondary
      : colors.whiteCold};
  margin: ${props => props.margin};
  position: relative;
  z-index: 0;
  ${device.tablet} {
    font-size: ${props => (props.large ? "1.5rem" : "1.125rem")};
  }
`;
export const StyledBody = styled.p`
  font-size: ${props => (props.large ? "1.125rem" : "1rem")};
  font-family: ${props => (props.bold ? "Poppins Medium" : "Poppins")};
  color: ${props =>
    props.dark
      ? colors.primaryDark
      : props.light
      ? colors.primaryLight
      : props.blue
      ? colors.textBlue
      : props.gold
      ? colors.secondaryLight
      : colors.whiteCold};
  margin: ${props => props.margin};
  ${props =>
    props.hoverable
      ? `:hover {
      color: ${colors.secondaryLight}
    }`
      : null}
  ${device.tablet} {
    font-size: ${props => (props.large ? "1rem" : "0.875rem")};
    overflow-wrap: break-word;
  }
`;
export const StyledLabel = styled.p`
  font-size: ${props => (props.small ? "0.625rem" : "0.875rem")};
  color: ${props =>
    props.dark
      ? colors.primaryDark
      : props.light
      ? colors.primaryLight
      : colors.whiteCold};
  margin: ${props => props.margin};
  ${device.tablet} {
    font-size: 0.625rem;
  }
`;
