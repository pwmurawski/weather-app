import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  font-weight: 600;
  font-size: 13px;
  padding-top: 15px;
  padding-bottom: 10px;
  z-index: -1;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Icon = styled.img`
  max-width: 80px;
  height: auto;
`;

export const CurrentTemp = styled.div`
  font-size: 25px;
  margin: 5px;
`;

export const Description = styled.div`
  text-transform: capitalize;
`;

export const Time = styled.div`
  font-size: 14px;
  margin: 5px;
`;

export const Date = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: rgb(64, 109, 161);
  color: white;
  border-radius: 20px;
`;

export const WindSpeed = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.div`
  text-transform: uppercase;
  font-size: 11px;
`;
