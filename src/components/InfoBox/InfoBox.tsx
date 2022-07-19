import { ReactElement, useState } from "react";
import { Container, PositionContainer } from "./styles/InfoBoxStyles";
import MinimizeIcon from "../MinimizeIcon/MinimizeIcon";
import minimizeIcon from "../../assets/minus-button.png";

interface IInfoBoxProps {
  isWeatherData: boolean;
  children: ReactElement;
  icon: string;
}

export default function InfoBox({
  isWeatherData,
  children,
  icon,
}: IInfoBoxProps) {
  const [minimize, setMinimize] = useState(false);

  if (!isWeatherData) return null;
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
