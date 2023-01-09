import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-bottom: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 5px 0 gray;
  z-index: 401;
`;

export const PositionContainer = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
`;
