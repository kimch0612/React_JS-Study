import styled from "styled-components"

const OutDownPost = styled.div`
  width:400px;
  height:500px;
  background-color: white;
  margin: 10px 10px 60px 10px;
`;

const InDownPost = styled.div`
  width:400px;
  height:500px;
  background-color: green;
  display: flex;
  text-align: center;
  flex-direction: column;
`;

const DownPostBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const UpPostDate = styled.div`
  margin: 0px 0px 0px 58px;
  font-size: small;
  font-weight: lighter;
`;

const DownPostTitle = styled.div`
  font-size: large;
  font-weight: bold;
  margin: 10px;
`;

export {OutDownPost, InDownPost, DownPostBox, UpPostDate, DownPostTitle};