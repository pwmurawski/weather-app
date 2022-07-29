import { LatLng } from "leaflet";
import { Container, Img } from "./styles/GoToLocalisationBtnStyles";
import yourLocationIcon from "../../assets/location.png";

interface IGoToLocalisationBtnProps {
  positionLocalisation: LatLng | undefined;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setPositionMouseClick: React.Dispatch<
    React.SetStateAction<LatLng | undefined>
  >;
}

export default function GoToLocalisationBtn({
  positionLocalisation,
  setSearchValue,
  setPositionMouseClick,
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
