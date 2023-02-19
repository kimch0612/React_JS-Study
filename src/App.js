import './App.css';
import styled from "styled-components"

const App = () => {
  return(
    <MainContainer>
        <Left />
        <Right />
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
  display: flex;
  justify-content: space-evenly;
  flex-wrap: column;
  flex-direction: row;
`;

const LeftText = styled.p`
  font-size: 30px;
  margin: 0px;
  color: rgb(0, 0, 0);
`;

const RightText = styled.p`
  font-size: 30px;
  margin: 20px;
  color: rgb(0, 0, 0);
  width: 1000px;
`;

const OutUpPost = styled.div`
  width:400px;
  height:200px;
  display:inline-block;
  background-color: white;
`;
const InUpPost = styled.div`
  width:400px;
  height:150px;
  display:inline-block;
  background-color: blue;
`;

const Left = () => {
  return (
    <LeftContainer>
      <LeftText><p>ChalsBlog</p></LeftText>
      <button>Github</button>
      <button>Instagram</button>
      <button>Facebook</button>
    </LeftContainer>
  );
};

const Right = () => {
  return (
    <RightContainer>
      <RightText><p>최근 게시물</p></RightText>
      <OutUpPost><InUpPost></InUpPost></OutUpPost>
    </RightContainer>
  );
};

export default App;
