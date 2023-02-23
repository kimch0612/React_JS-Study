import styled from "styled-components"
import { Outlet } from "react-router-dom";
import shiba from "./img/title.png";
import large from "./img/large.png";
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
          <RightPost>이 편지는 영국에서 최초로 시작되어 일년에 한바퀴를 돌면서 받는 사람에게 행운을 주었고 지금은 당신에게로 옮겨진 이 편지는 4일 안에 당신 곁을 떠나야 합니다. 이 편지를 포함해서 7통을 행운이 필요한 사람에게 보내 주셔야 합니다. 복사를 해도 좋습니다. 혹 미신이라 하실지 모르지만 사실입니다. 영국에서 HGXWCH이라는 사람은 1930년에 이 편지를 받았습니다. 그는 비서에게 복사해서 보내라고 했습니다. 며칠 뒤에 복권이 당첨되어 20억을 받았습니다. 어떤 이는 이 편지를 받았으나 96시간 이내 자신의 손에서 떠나야 한다는 사실을 잊었습니다. 그는 곧 사직되었습니다. 나중에야 이 사실을 알고 7통의 편지를 보냈는데 다시 좋은 직장을 얻었습니다. 미국의 케네디 대통령은 이 편지를 받았지만 그냥 버렸습니다. 결국 9일 후 그는 암살당했습니다. 기억해 주세요. 이 편지를 보내면 7년의 행운이 있을 것이고 그렇지 않으면 3년의 불행이 있을 것입니다. 그리고 이 편지를 버리거나 낙서를 해서는 절대로 안됩니다. 7통입니다. 이 편지를 받은 사람은 행운이 깃들것입니다. 힘들겠지만 좋은게 좋다고 생각하세요. 7년의 행운을 빌면서...</RightPost>
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
          <p>이 글은</p>
          <p>영어로 eagle입니다.</p>
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
  margin: 15px 0px 0px 0px;
  color: rgb(0, 0, 0);
`;

const RightPost = styled.p`
  font-size: 25px;
  margin: 70px 0px 0px 0px;
  color: rgb(0, 0, 0);
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