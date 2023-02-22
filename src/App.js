import './App.css';
import {OutDownPost, InDownPost, DownPostBox, DownPostTitle} from "./Down_area";
import {OutUpPost, InUpPost, UpPostBox, UpPostTitle, UpPostDate} from "./Up_area";
import styled from "styled-components"
import shiba from "./img/title.png";
import large from "./img/large.png";

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
  flex-wrap: wrap;
  flex-direction: row;
`;

const LeftText = styled.p`
  font-size: 30px;
  margin: 0px;
  color: rgb(0, 0, 0);
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

const PostImage = styled.img`
  height: 400px;
  width: 400px;
`;

const Right = () => {
  return (
    <RightContainer>
      <UpPostBox>
        <OutUpPost>
          <InUpPost>
            <img src={shiba}/>
            <UpPostTitle>안녕하세요</UpPostTitle>
            <UpPostDate>2023.02.20</UpPostDate>
          </InUpPost>
        </OutUpPost>

        <OutUpPost>
          <InUpPost>
            <img src={shiba}/>
            <UpPostTitle>이 글은</UpPostTitle>
            <UpPostDate>2023.02.20</UpPostDate>
          </InUpPost>
        </OutUpPost>

        <OutUpPost>
          <InUpPost>
            <img src={shiba}/>
            <UpPostTitle>테스트 글입니다</UpPostTitle>
            <UpPostDate>2023.02.20</UpPostDate>
          </InUpPost>
        </OutUpPost>

        <OutUpPost>
          <InUpPost>
            <img src={shiba}/>
            <UpPostTitle>감사합니다</UpPostTitle>
            <UpPostDate>2023.02.20</UpPostDate>
          </InUpPost>
        </OutUpPost>
      </UpPostBox>

      <DownPostBox>
        <OutDownPost>
          <InDownPost>
            <PostImage src={large}/>
            <DownPostTitle>집에 가고싶어요</DownPostTitle>
          </InDownPost>
        </OutDownPost>

        <OutDownPost>
          <InDownPost>
            <PostImage src={large}/>
            <DownPostTitle>208에 사람있어요</DownPostTitle>
          </InDownPost>
        </OutDownPost>

        <OutDownPost>
          <InDownPost>
            <PostImage src={large}/>
            <DownPostTitle>아....</DownPostTitle>
          </InDownPost>
        </OutDownPost>

        <OutDownPost>
          <InDownPost>
            <PostImage src={large}/>
            <DownPostTitle>꺼라;;</DownPostTitle>
          </InDownPost>
        </OutDownPost>
      </DownPostBox>
    </RightContainer>
  );
};

export default App;