import { ReactElement, useState } from "react";
import { Container, PositionContainer } from "./styles/InfoBoxStyles";
import MinimizeIcon from "../MinimizeIcon/MinimizeIcon";
import minimizeIcon from "../../assets/minus-button.png";

interface IInfoBoxProps {
  isData: boolean;
  children: ReactElement;
  icon: string;
}

export default function InfoBox({ isData, children, icon }: IInfoBoxProps) {
  const [minimize, setMinimize] = useState(false);

  if (!isData) return null;
  return minimize ? (
    <MinimizeIcon icon={icon} setMinimize={setMinimize} />
  ) : (
    <Container>
      <PositionContainer>
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
