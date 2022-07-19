import styled from "styled-components";

export const SidePanel = styled.section`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  max-height: 100%;
  height: fit-content;
  padding: 20px;
  overflow-y: auto;
`;

export const GoToLocalisation = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 150px;
  border: 0;
  padding: 8px;
  background-color: rgb(207, 241, 254);
  margin-bottom: 20px;
  box-shadow: 0 1px 5px 0 gray;
  cursor: pointer;
  z-index: 401;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;
