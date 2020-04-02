import React from "react";
import styled from "styled-components";
import StyledCenterContent from "./CenterContent";
import { ReactComponent as NavbarIcon } from "../assets/images/navbar.svg";

const Header = () => {
  const NavIcon = styled(NavbarIcon)`
    stroke: white;
    color: white;
    height: 50px;
    width: 50px;
    cursor: pointer;
  `;
  const HeaderWrapper = styled.div`
    width: 100%;
    display: flex;
    height: 100px;
    align-items: flex-end;
  `;

  const Search = styled.input`
    width: 250px;
    color: black;
    text-align: center;
    border-radius: 50px;
    border: 1px solid black;
    margin-left: 50px;
  `;
  return (
    <HeaderWrapper>
      <StyledCenterContent>
        <NavIcon />
        <Search placeholder="Search your favorite movie" />
      </StyledCenterContent>
    </HeaderWrapper>
  );
};
export default Header;
