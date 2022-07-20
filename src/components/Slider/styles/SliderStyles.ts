import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Img = styled.img`
  max-width: 100%;
  height: auto;
`;

const size = "30px";
export const Btn = styled.button`
  position: absolute;
  width: ${size};
  height: ${size};
  border-radius: 150px;
  border: 0;
  top: calc(50% - ${size} / 2);
  box-shadow: 0 1px 5px 0 black;
  background-color: white;
  cursor: pointer;
  font-weight: bold;
`;

export const PrevBtn = styled(Btn)`
  left: 0;
`;

export const NextBtn = styled(Btn)`
  right: 0;
`;
