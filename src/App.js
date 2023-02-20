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
  width: 100%;
  display: fixed;
  justify-content: space-around;
  flex-wrap: wrap;
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
`;

const OutUpPost = styled.div`
  width:400px;
  height:200px;
  display:inline-block;
  background-color: white;
  margin: 100px; 50px; 50px; 50px;
`;
const InUpPost = styled.div`
  width:400px;
  height:150px;
  display:inline-block;
  background-color: blue;
  display: flex;
  text-align: center;
  justify-content: center;
`;

const OutDownPost = styled.div`
  width:250px;
  height:250px;
  display:inline-block;
  background-color: white;
  margin: 100px; 50px; 50px; 50px;
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
      <OutUpPost><InUpPost>안녕하세요</InUpPost></OutUpPost>
      <OutUpPost><InUpPost>이거 왜 안되는걸까요</InUpPost></OutUpPost>
      <OutUpPost><InUpPost>진짜 몰루겠어요</InUpPost></OutUpPost>
      <OutUpPost><InUpPost>ㅠㅠㅠㅠ</InUpPost></OutUpPost>
      <OutDownPost><InDownPost>sans1</InDownPost></OutDownPost>
      <OutDownPost><InDownPost>sans1</InDownPost></OutDownPost>
      <OutDownPost><InDownPost>sans1</InDownPost></OutDownPost>
      <OutDownPost><InDownPost>sans1</InDownPost></OutDownPost>
    </RightContainer>
  );
};

export default App;