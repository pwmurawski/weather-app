import styled from "styled-components";

interface IContainerProps {
  width?: string;
  height?: string;
  padding?: string;
}
export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }: IContainerProps) => width ?? "50px"};
  height: ${({ height }: IContainerProps) => height ?? "50px"};
  margin-bottom: 20px;
  border: 0;
  padding: ${({ padding }: IContainerProps) => padding ?? "8px"};
  border-radius: 150px;
  background-color: rgb(207, 241, 254);
  box-shadow: 0 1px 5px 0 gray;
  z-index: 401;
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 100%;
  height: 100%;
`;
