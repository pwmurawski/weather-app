import { Container, Icon } from "./styles/MinimizeIconStyles";

interface IMinimizeIconProps {
  setMinimize: React.Dispatch<React.SetStateAction<boolean>>;
  icon: string;
  width?: string;
  height?: string;
  padding?: string;
}

const defaultProps = {
  width: undefined,
  height: undefined,
  padding: undefined,
};

export default function MinimizeIcon({
  icon,
  setMinimize,
  width,
  height,
  padding,
}: IMinimizeIconProps) {
  return (
    <Container
      data-testid="containerMinimizeIcon"
      width={width}
      height={height}
      padding={padding}
      onClick={() => setMinimize((state) => !state)}
    >
      <Icon data-testid="icon" src={icon} alt="Minimize" />
    </Container>
  );
}

MinimizeIcon.defaultProps = defaultProps;
