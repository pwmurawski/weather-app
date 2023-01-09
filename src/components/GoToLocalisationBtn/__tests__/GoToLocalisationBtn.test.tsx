import { render, fireEvent } from "@testing-library/react";
import { LatLng } from "leaflet";
import { GoToLocalisationBtn } from "../GoToLocalisationBtn";

const position = {
  lat: 52.9209314,
  lng: 22.52545,
} as LatLng;
const setPositionMouseClick = jest.fn();
const setSearchValue = jest.fn();

const renderGoToLocalisationBtn = () => {
  const utils = render(
    <GoToLocalisationBtn
      positionLocalisation={position}
      setPositionMouseClick={setPositionMouseClick}
      setSearchValue={setSearchValue}
    />
  );

  return { ...utils };
};

describe("GoToLocalisationBtn component", () => {
  it("render containerGoToLocalisationBtn", () => {
    const { getByTestId } = renderGoToLocalisationBtn();
    const containerGoToLocalisationBtn = getByTestId(
      "containerGoToLocalisationBtn"
    );

    expect(containerGoToLocalisationBtn).toBeInTheDocument();
  });

  it("whether the containerGoToLocalisationBtn has appropriate styles", () => {
    const { getByTestId } = renderGoToLocalisationBtn();
    const containerGoToLocalisationBtn = getByTestId(
      "containerGoToLocalisationBtn"
    );

    expect(containerGoToLocalisationBtn).toHaveStyle({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "50px",
      height: "50px",
      borderRadius: "150px",
      border: "0",
      padding: "8px",
      backgroundColor: "rgb(207, 241, 254)",
      marginBottom: "20px",
      boxShadow: "0 1px 5px 0 gray",
      cursor: "pointer",
      zIndex: "401",
    });
  });

  it("render img", () => {
    const { getByTestId } = renderGoToLocalisationBtn();
    const img = getByTestId("img");

    expect(img).toBeInTheDocument();
    expect(img.getAttribute("src")).toBe("location.png");
  });

  it("whether the img has appropriate styles", () => {
    const { getByTestId } = renderGoToLocalisationBtn();
    const img = getByTestId("img");

    expect(img).toHaveStyle({
      width: "100%",
      height: "100%",
    });
  });

  it("containerGoToLocalisationBtn onClick", () => {
    const { getByTestId } = renderGoToLocalisationBtn();
    const containerGoToLocalisationBtn = getByTestId(
      "containerGoToLocalisationBtn"
    );

    fireEvent.click(containerGoToLocalisationBtn);

    expect(setPositionMouseClick).toHaveBeenCalledTimes(1);
    expect(setPositionMouseClick).toHaveBeenCalledWith(position);

    expect(setSearchValue).toHaveBeenCalledTimes(1);
    expect(setSearchValue).toHaveBeenCalledWith("");
  });
});
