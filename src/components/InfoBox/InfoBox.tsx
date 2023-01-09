import { ReactNode, useState } from "react";
import { Container, PositionContainer } from "./styles/InfoBoxStyles";
import { MinimizeIcon } from "../MinimizeIcon/MinimizeIcon";
import minimizeIcon from "../../assets/minus-button.png";

interface IInfoBoxProps {
  isData: boolean;
  children: ReactNode;
  icon: string;
}

export function InfoBox({ isData, children, icon }: IInfoBoxProps) {
  const [minimize, setMinimize] = useState(false);

  if (!isData) return null;
  return minimize ? (
    <MinimizeIcon icon={icon} setMinimize={setMinimize} />
  ) : (
    <Container data-testid="containerInfoBox">
      <PositionContainer data-testid="positionContainer">
        <MinimizeIcon
          width="25px"
          height="25px"
          padding="0"
          icon={minimizeIcon}
          setMinimize={setMinimize}
        />
      </PositionContainer>
      {children}
    </Container>
  );
}
