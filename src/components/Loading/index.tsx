import React from "react";

import {
  OverlayContainer,
  ContentWrapper,
  StyledImage,
  LoadingText,
} from "./styles";

import loadingImgSrc from "../../assets/loading.png";

const Loading: React.FC = () => {
  return (
    <OverlayContainer>
      <ContentWrapper>
        <StyledImage src={loadingImgSrc} alt="Rick and Morty running" />
        <LoadingText>Loading</LoadingText>
      </ContentWrapper>
    </OverlayContainer>
  );
};

export default Loading;
