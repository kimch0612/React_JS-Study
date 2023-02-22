import styled from "styled-components"

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
  background-color: #7eaef2;
  display: flex;
  text-align: center;
`;

const UpPostBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
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

export {OutUpPost, InUpPost, UpPostBox, UpPostTitle, UpPostDate};