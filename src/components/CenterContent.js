import styled from "styled-components";
const StyledCenterContent = styled.div`
  display: flex;
  align-items: flex-end;
  max-width: 1184px;
  width: 100%;
  margin: 0 auto;
  padding: ${props => (props.isOnTop ? "16px" : "8px")};
  transition: padding 0.2s ease;
  ${({ theme }) => theme.device.tablet} {
    padding: ${props => (props.isOnTop ? "16px 8px" : "8px")};
  }
`;

export default StyledCenterContent;
