import styled from "styled-components";

export const Box = styled.div`
  width: 380px;
  height: 460px;
  background-color: #5736a3;
  border-radius: 20px;
`;
export const ImageDiv = styled.div`
  position: relative;
  width: 380px;
  height: 214px;
`;

export const ImgLogo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const ImgPicture = styled.img`
  position: absolute;
  top: 28px;
  left: 36px;
`;

export const Tape = styled.div`
  width: 100%;
  height: 8px;
  background-color: #ebd8ff;
 
`;

export const Avatar = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #ebd8ff;
  z-index: 10;
  margin-top: -44px;
  margin-left: 150px;
`;

export const ImgAvatar = styled.img`
  position: absolute;
  border-radius: 50%;
  width: 62px;
  height: 62px;
  top: 9px;
  left: 9px;
`;
export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
export const Text = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  margin-top: 16px;
  color: #ebd8ff;
`;

export const Button= styled.button`
width: 196px;
height: 50px;
border-radius: 10px;
box-shadow: 0px 3.44px rgba(0, 0, 0, 0.25);
background-color: #EBD8FF;
margin-top: 26px;
font-size: 18px;
line-height: 22px;
font-weight: 600;
color:#373737;
`
