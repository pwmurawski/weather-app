import { LatLng } from "leaflet";
import { Container, Img } from "./styles/GoToLocalisationBtnStyles";
import yourLocationIcon from "../../assets/location.png";

interface IGoToLocalisationBtnProps {
  positionLocalisation: LatLng | undefined;
  setPositionMouseClick: React.Dispatch<
    React.SetStateAction<LatLng | undefined>
  >;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function GoToLocalisationBtn({
  positionLocalisation,
  setPositionMouseClick,
  setSearchValue,
}: IGoToLocalisationBtnProps) {
  if (!positionLocalisation) return null;
  return (
    <Container
      onClick={() => {
        setSearchValue("");
        setPositionMouseClick(positionLocalisation);
      }}
      type="button"
    >
      <Img src={yourLocationIcon} />
    </Container>
  );
}
