import { fireEvent, render } from "@testing-library/react";
import MinimizeIcon from "../MinimizeIcon";
import minimizeIcon from "../../../assets/minus-button.png";

const setMinimize = jest.fn();

describe("MinimizeIcon component", () => {
  it("render containerMinimizeIcon", () => {
    const { getByTestId } = render(
      <MinimizeIcon icon={minimizeIcon} setMinimize={setMinimize} />
    );
    const containerMinimizeIcon = getByTestId("containerMinimizeIcon");

    expect(containerMinimizeIcon).toBeInTheDocument();
  });

  it("whether the containerMinimizeIcon has appropriate styles", () => {
    const { getByTestId } = render(
      <MinimizeIcon icon={minimizeIcon} setMinimize={setMinimize} />
    );
    const containerMinimizeIcon = getByTestId("containerMinimizeIcon");

    expect(containerMinimizeIcon).toHaveStyle({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "50px",
      height: "50px",
      marginBottom: "20px",
      border: "0",
      padding: "8px",
      borderRadius: "150px",
      backgroundColor: "rgb(207, 241, 254)",
      boxShadow: "0 1px 5px 0 gray",
      zIndex: "401",
      cursor: "pointer",
    });
  });

  it("render icon", () => {
    const { getByTestId } = render(
      <MinimizeIcon icon={minimizeIcon} setMinimize={setMinimize} />
    );
    const icon = getByTestId("icon");

    expect(icon).toBeInTheDocument();
    expect(icon.getAttribute("src")).toBe("minus-button.png");
  });

  it("render icon", () => {
    const { getByTestId } = render(
      <MinimizeIcon icon={minimizeIcon} setMinimize={setMinimize} />
    );
    const icon = getByTestId("icon");

    expect(icon).toHaveStyle({
      width: "100%",
      height: "100%",
    });
  });

  it("onClick containerMinimizeIcon", () => {
    const { getByTestId } = render(
      <MinimizeIcon icon={minimizeIcon} setMinimize={setMinimize} />
    );
    const containerMinimizeIcon = getByTestId("containerMinimizeIcon");

    expect(setMinimize).toHaveBeenCalledTimes(0);

    fireEvent.click(containerMinimizeIcon);

    expect(setMinimize).toHaveBeenCalledTimes(1);
  });

  it("will props change styles", () => {
    const { getByTestId } = render(
      <MinimizeIcon
        icon={minimizeIcon}
        setMinimize={setMinimize}
        width="100px"
        height="100px"
        padding="20px"
      />
    );
    const containerMinimizeIcon = getByTestId("containerMinimizeIcon");

    expect(containerMinimizeIcon).toHaveStyle({
      width: "100px",
      height: "100px",
      padding: "20px",
    });
  });
});
