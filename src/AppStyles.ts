import styled from "styled-components";

export const SidePanel = styled.section`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  height: fit-content;
  padding: 20px;
  z-index: 401;
`;

export const GoToLocalisation = styled.button`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 150px;
  border: 0;
  padding: 0;
  background-color: rgb(207, 241, 254);
  margin-bottom: 20px;
  box-shadow: 0 1px 5px 0 gray;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 35px;
  height: 35px;
`;
