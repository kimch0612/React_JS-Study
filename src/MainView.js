import styled from "styled-components"
import shiba from "./img/title.png";
import large from "./img/large.png";
import eagle from "./img/eagle.png";
import thanks from "./img/thanks.gif";
import {OutDownPost, InDownPost, DownPostBox, DownPostTitle} from "./Down_area";
import {OutUpPost, InUpPost, UpPostBox, UpPostTitle, UpPostDate} from "./Up_area";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const MainView = () => {
  return (
      <MainContainer>
          <Left />
          <Right />
      </MainContainer>
  );
};

const SubView = () => {
  const params = useParams();

  if (params.postID === "0001") {
    return (
      <>
      <MainContainer>
        <Left/>
        <RightContainer>
          <RightPostTitle>안녕하세요</RightPostTitle>
          <RightPostDate>작성일 : 2023.02.20</RightPostDate>
          <RightPost>dk...</RightPost>
          <RightPostHash>#아....</RightPostHash>
        </RightContainer>
      </MainContainer>
      </>
    );
  };

  if (params.postID === "0002") {
    return (
      <>
      <MainContainer>
        <Left/>
        <RightContainer>
          <RightPostTitle>이 글은</RightPostTitle>
          <RightPostDate>작성일 : 2023.02.20</RightPostDate>
          <RightPost>영어로 Eagle이라고 씁니다</RightPost>
          <img src={eagle}></img>
          <RightPostHash>#이글</RightPostHash>
        </RightContainer>
      </MainContainer>
      </>
    );
  };

  if (params.postID === "0003") {
    return (
      <>
      <MainContainer>
        <Left/>
        <RightContainer>
          <RightPostTitle>테스트 글입니다</RightPostTitle>
          <RightPostDate>작성일 : 2023.02.20</RightPostDate>
          <RightPost>500 Internal Server Error</RightPost>
          <RightPostHash>#Maintenance</RightPostHash>
        </RightContainer>
      </MainContainer>
      </>
    );
  };

  if (params.postID === "0004") {
    return (
      <>
      <MainContainer>
        <Left/>
        <RightContainer>
          <RightPostTitle>감사합니다</RightPostTitle>
          <RightPostDate>작성일 : 2023.02.20</RightPostDate>
          <img src={thanks}></img>
          <RightPostHash>#THX</RightPostHash>
        </RightContainer>
      </MainContainer>
      </>
    );
  };
};

const RightPostTitle = styled.p`
  font-size: 70px;
  margin: 0px;
  color: rgb(0, 0, 0);
`;

const RightPostDate = styled.p`
  font-size: 19px;
  margin: 15px 0px 10px 0px;
  color: rgb(0, 0, 0);
`;

const RightPost = styled.p`
  font-size: 25px;
  margin: 70px 0px 20px 0px;
  color: rgb(0, 0, 0);
`;

const RightPostHash = styled.p`
  font-size: 15px;
  margin: 20px 0px 0px 0px;
  color: rgb(0, 0, 0);
  font-weight: lighter
`;

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

  const RightContainer = styled.div`
  width: 100%;
  margin-left: 400px;
  padding: 100px 200px;
  flex-wrap: wrap;
  flex-direction: row;
`;

const PostImage = styled.img`
  height: 400px;
  width: 400px;
`;

const Right = () => {
  return (
    <RightContainer>
      <UpPostBox>

        <Link to="/postview/0001">
          <OutUpPost>
            <InUpPost>
              <img src={shiba}/>
              <UpPostTitle>안녕하세요</UpPostTitle>
              <UpPostDate>2023.02.20</UpPostDate>
            </InUpPost>
          </OutUpPost>
        </Link>
        <Link to="/postview/0002">
          <OutUpPost>
            <InUpPost>
              <img src={shiba}/>
              <UpPostTitle>이 글은</UpPostTitle>
              <UpPostDate>2023.02.20</UpPostDate>
            </InUpPost>
          </OutUpPost>
        </Link>
        <Link to="/postview/0003">
          <OutUpPost>
            <InUpPost>
              <img src={shiba}/>
              <UpPostTitle>테스트 글입니다</UpPostTitle>
              <UpPostDate>2023.02.20</UpPostDate>
            </InUpPost>
          </OutUpPost>
        </Link>
        <Link to="/postview/0004">
          <OutUpPost>
            <InUpPost>
              <img src={shiba}/>
              <UpPostTitle>감사합니다</UpPostTitle>
              <UpPostDate>2023.02.20</UpPostDate>
            </InUpPost>
          </OutUpPost>
        </Link>
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

export {MainView, SubView};