/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const CityName = styled.h2`
  align-self: flex-start;
  margin: 15px 0;
  min-height: 10px;
`;

export const Icon = styled.img`
  max-width: 80px;
  height: auto;
`;

export const CurrentTemperature = styled.div`
  font-size: 30px;
  color: gold;
  margin: 5px;
`;

export const Description = styled.div`
  text-transform: capitalize;
  margin: 5px;
`;

export const Time = styled.div`
  position: absolute;
  top: -15px;
  right: 0;
  font-size: 12px;
  color: black;
`;

export const SunriseSunset = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  max-width: 25px;
  height: auto;
  margin: 5px;
`;

export const WindDirectionArrow = styled.img`
  transform: rotate(${({ deg }: { deg: number }) => `${180 + deg}deg`});
  width: 20px;
  height: 20px;
`;

export const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(64, 109, 161);
  color: white;
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
`;

export const RowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.label`
  font-size: 9px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const BoxContainer = styled(RowContainer)`
  justify-content: space-evenly;
  width: 100%;
`;

export const ColumnBoxContainer = styled(ColumnContainer)`
  width: 100%;
`;

export const Box = styled(ColumnContainer)`
  margin: 5px;
`;
