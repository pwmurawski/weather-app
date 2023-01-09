import { render } from "@testing-library/react";
import { InfoBox } from "../InfoBox";
import icon from "../../../assets/weather-app.png";

describe("InfoBox component", () => {
  it("render containerInfoBox", () => {
    const { getByTestId } = render(
      <InfoBox isData icon={icon}>
        <div data-testid="children" />
      </InfoBox>
    );
    const containerInfoBox = getByTestId("containerInfoBox");

    expect(containerInfoBox).toBeInTheDocument();
  });

  it("whether the containerInfoBox has appropriate styles", () => {
    const { getByTestId } = render(
      <InfoBox isData icon={icon}>
        <div data-testid="children" />
      </InfoBox>
    );
    const containerInfoBox = getByTestId("containerInfoBox");

    expect(containerInfoBox).toHaveStyle({
      position: "relative",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      maxWidth: "400px",
      width: "100%",
      height: "fit-content",
      padding: "10px",
      marginBottom: "20px",
      backgroundColor: "white",
      borderRadius: "8px",
      boxShadow: "0 1px 5px 0 gray",
      zIndex: "401",
    });
  });

  it("render positionContainer", () => {
    const { getByTestId } = render(
      <InfoBox isData icon={icon}>
        <div data-testid="children" />
      </InfoBox>
    );
    const positionContainer = getByTestId("positionContainer");

    expect(positionContainer).toBeInTheDocument();
  });

  it("whether the positionContainer has appropriate styles", () => {
    const { getByTestId } = render(
      <InfoBox isData icon={icon}>
        <div data-testid="children" />
      </InfoBox>
    );
    const positionContainer = getByTestId("positionContainer");

    expect(positionContainer).toHaveStyle({
      position: "absolute",
      top: "5px",
      right: "5px",
    });
  });

  it("render containerMinimizeIcon", () => {
    const { getByTestId } = render(
      <InfoBox isData icon={icon}>
        <div data-testid="children" />
      </InfoBox>
    );
    const containerMinimizeIcon = getByTestId("containerMinimizeIcon");

    expect(containerMinimizeIcon).toBeInTheDocument();
  });

  it("render children", () => {
    const { getByTestId } = render(
      <InfoBox isData icon={icon}>
        <div data-testid="children" />
      </InfoBox>
    );
    const children = getByTestId("children");

    expect(children).toBeInTheDocument();
  });
});
