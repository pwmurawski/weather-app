import styled from "styled-components";

export const Container = styled.section`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 10px 15px;
  margin-bottom: 20px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 1px 5px 0 gray;
  cursor: text;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border: 0;
  outline: none;
  font-size: 14px;
`;

export const Icon = styled.img`
  width: 25px;
  height: 25px;
`;
