import './App.css';
import styled from "styled-components"
import shiba from "./img/title.png";

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
`;

const LeftContainer = styled.div`
  width: 400px;
  height: 100vh;
  background-color: #59d7eb;
  background-size: cover;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  position: fixed;
`;

const RightContainer = styled.div`
  width: 100%;
  margin-left: 400px;
  padding: 100px 200px;
  display: fixed;
  flex-wrap: wrap;
  flex-direction: row;
`;

const LeftText = styled.p`
  font-size: 30px;
  margin: 0px;
  color: rgb(0, 0, 0);
`;

const OutUpPost = styled.div`
  width:400px;
  height:200px;
  display:inline-block;
  background-color: white;
`;

const OutDownPost = styled.div`
  width:250px;
  height:250px;
  display:inline-block;
  background-color: white;
`;

const InUpPost = styled.div`
  width:400px;
  height:150px;
  display:inline-block;
  background-color: #7eaef2;
  display: flex;
  text-align: center;
`;

const InDownPost = styled.div`
  width:250px;
  height:250px;
  display:inline-block;
  background-color: green;
  display: flex;
  text-align: center;
  justify-content: center;
`;

const UpPostBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const DownPostBox = styled.div`
  
`;

const UpPostTitle = styled.div`
  margin: 30px 0px 0px 40px;
  font-size: large;
  font-weight: bold;
  height: 100px;
`;

const UpPostDate = styled.div`
  margin: 0px 0px 0px 58px;
  font-size: small;
  font-weight: lighter;
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
      <UpPostBox>
        <OutUpPost><InUpPost><img src={shiba}/><UpPostTitle>안녕하세요</UpPostTitle><UpPostDate>2023.02.20</UpPostDate></InUpPost></OutUpPost>
        <OutUpPost><InUpPost><img src={shiba}/><UpPostTitle>이 글은</UpPostTitle><UpPostDate>2023.02.20</UpPostDate></InUpPost></OutUpPost>
        <OutUpPost><InUpPost><img src={shiba}/><UpPostTitle>테스트 글입니다</UpPostTitle><UpPostDate>2023.02.20</UpPostDate></InUpPost></OutUpPost>
        <OutUpPost><InUpPost><img src={shiba}/><UpPostTitle>감사합니다</UpPostTitle><UpPostDate>2023.02.20</UpPostDate></InUpPost></OutUpPost>
      </UpPostBox>
      <DownPostBox>
        <OutDownPost><InDownPost>sans1</InDownPost></OutDownPost>
        <OutDownPost><InDownPost>sans1</InDownPost></OutDownPost>
        <OutDownPost><InDownPost>sans1</InDownPost></OutDownPost>
        <OutDownPost><InDownPost>sans1</InDownPost></OutDownPost>
      </DownPostBox>
    </RightContainer>
  );
};

export default App;