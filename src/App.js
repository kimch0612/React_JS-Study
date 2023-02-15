import './App.css';
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
};

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap
`;

const LeftContainer = styled.div`
  margin: 0px;
  width: 400px;
  border: 0;
  height: 100vh;
  background-color: #59d7eb;
  background-size: cover;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end
`;

const RightContainer = styled.div`

`;

const LeftText = styled.p`
  font-size: 30px;
  margin: 0px;
  color: rgb(0, 0, 0);
`;

const RightText = styled.p`
  font-size: 50px;
  margin: 0px;
  color: rgb(0, 0, 0);
`;

const Left = () => {
  return (
    <>
      <LeftText><p>ChalsBlog</p></LeftText>
      <button>Github</button>
      <button>Instagram</button>
      <button>Facebook</button>
    </>
  );
};

const Right = () => {
  return (
    <>
      <RightText>꺼라;;</RightText>
    </>
  );
};

export default App;
