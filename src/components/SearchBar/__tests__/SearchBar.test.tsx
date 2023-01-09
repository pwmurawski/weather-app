import { fireEvent, render } from "@testing-library/react";
import { SearchBar } from "../SearchBar";

describe("SearchBar component", () => {
  it("render containerSearchBar", () => {
    const { getByTestId } = render(<SearchBar />);
    const containerSearchBar = getByTestId("containerSearchBar");

    expect(containerSearchBar).toBeInTheDocument();
  });

  it("whether the containerSearchBar has appropriate styles", () => {
    const { getByTestId } = render(<SearchBar />);
    const containerSearchBar = getByTestId("containerSearchBar");

    expect(containerSearchBar).toHaveStyle({
      boxSizing: "border-box",
      display: "flex",
      alignItems: "center",
      width: "100%",
      minHeight: "50px",
      padding: "10px 15px",
      marginBottom: "20px",
      borderRadius: "8px",
      backgroundColor: "white",
      boxShadow: "0 1px 5px 0 gray",
      cursor: "text",
      zIndex: "401",
    });
  });

  it("render input", () => {
    const { getByTestId } = render(<SearchBar />);
    const input = getByTestId("input") as HTMLInputElement;

    expect(input).toBeInTheDocument();
    expect(input.placeholder).toBe("Wyszukaj");
  });

  it("whether the input has appropriate styles", () => {
    const { getByTestId } = render(<SearchBar />);
    const input = getByTestId("input");

    expect(input).toHaveStyle({
      boxSizing: "border-box",
      width: "100%",
      height: "100%",
      border: "0",
      outline: "none",
      fontSize: "14px",
    });
  });

  it("render icon", () => {
    const { getByTestId } = render(<SearchBar />);
    const icon = getByTestId("icon");

    expect(icon).toBeInTheDocument();
    expect(icon.getAttribute("src")).toBe("search.png");
  });

  it("whether the icon has appropriate styles", () => {
    const { getByTestId } = render(<SearchBar />);
    const icon = getByTestId("icon");

    expect(icon).toHaveStyle({
      width: "25px",
      height: "25px",
    });
  });

  it("props value change input value", () => {
    const onChange = jest.fn();

    const { getByTestId } = render(
      <SearchBar value="warsaw" onChange={onChange} />
    );
    const input = getByTestId("input") as HTMLInputElement;

    expect(input.value).toBe("warsaw");
  });

  it("input onChange", () => {
    const onChange = jest.fn();

    const { getByTestId } = render(<SearchBar onChange={onChange} />);
    const input = getByTestId("input") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "warsaw" } });

    expect(input.value).toBe("warsaw");
  });

  it("whether clicking on the containerSearchBar focuses on the input", async () => {
    const { getByTestId } = render(<SearchBar />);
    const containerSearchBar = getByTestId("containerSearchBar");
    const input = getByTestId("input") as HTMLInputElement;

    const focus = jest.fn();
    jest.spyOn(input, "focus").mockImplementation(focus);

    expect(focus).toHaveBeenCalledTimes(0);

    fireEvent.click(containerSearchBar);

    expect(focus).toHaveBeenCalledTimes(1);
  });
});
