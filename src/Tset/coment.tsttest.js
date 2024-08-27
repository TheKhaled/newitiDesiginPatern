import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ColorButtons from "../assets/src/compents/ColorButtons";

describe("ColorButtons Component", () => {
  test("initial panel color is white", () => {
    render(<ColorButtons />);
    const panel = screen.getByRole("presentation");
    expect(panel).toHaveStyle("background-color: white");
  });

  test("clicking green button changes panel color to green", () => {
    render(<ColorButtons />);
    const greenButton = screen.getByText("Green Button");
    const panel = screen.getByRole("presentation");

    fireEvent.click(greenButton);

    expect(panel).toHaveStyle("background-color: green");
  });

  test("clicking red button changes panel color to red", () => {
    render(<ColorButtons />);
    const redButton = screen.getByText("Red Button");
    const panel = screen.getByRole("presentation");

    fireEvent.click(redButton);

    expect(panel).toHaveStyle("background-color: red");
  });
});
