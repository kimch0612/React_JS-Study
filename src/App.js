import './App.css';
import { useState } from "react";
import { useEffect, useState } from "react";
import styled from "styled-components"

const App = () => {
  return(
    <MainContainer>
      <LeftContainer>
          <Left />
      </LeftContainer>
      
      <RightContainer>
          <Right />
      </RightContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100%
  hight: 100%
`

export default App;
