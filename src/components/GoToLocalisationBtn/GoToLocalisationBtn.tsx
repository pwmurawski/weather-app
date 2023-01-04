import { LatLng } from "leaflet";
import { Dispatch, SetStateAction } from "react";
import { Container, Img } from "./styles/GoToLocalisationBtnStyles";
import yourLocationIcon from "../../assets/location.png";

interface IGoToLocalisationBtnProps {
  positionLocalisation: LatLng | undefined;
  setPositionMouseClick: Dispatch<SetStateAction<LatLng | undefined>>;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

export default function GoToLocalisationBtn({
  positionLocalisation,
  setPositionMouseClick,
  setSearchValue,
}: IGoToLocalisationBtnProps) {
  if (!positionLocalisation) return null;
  return (
    <Container
      data-testid="containerGoToLocalisationBtn"
      onClick={() => {
        setSearchValue("");
        setPositionMouseClick(positionLocalisation);
      }}
      type="button"
    >
      <Img data-testid="img" src={yourLocationIcon} alt="Go to localisation" />
    </Container>
  );
}
