import React from "react";
import StyledCenterContent from "../CenterContent";
import BgImage from "../../assets/images/herobg.png";
import styled from "styled-components";
import { StyledHeroHeading } from "../../Texts";
import { StyledButtonOutline } from "../../Buttons";
const HeroWrapper = styled.div``;
const StyledContentHero = styled.div`
  background-image: url(${BgImage});
  height: calc(100vh - 100px);
  background-size: cover;
  padding: 0;
  background-repeat: no-repeat;
`;
const ContentWrapper = styled(StyledCenterContent)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  color: black;
  padding: 0;
`;
const HeroPage = () => {
  return (
    <HeroWrapper>
      <StyledContentHero>
        <ContentWrapper>
          <StyledHeroHeading margin="0">
            Rate your FAVOURITE movie
          </StyledHeroHeading>
          <StyledButtonOutline>Rate Now</StyledButtonOutline>
        </ContentWrapper>
      </StyledContentHero>
    </HeroWrapper>
  );
};

export default HeroPage;
