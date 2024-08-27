import { render, screen, cleanup } from "@testing-library/react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import Toasts from "../assets/src/Toast/Toasts"; // Adjust the import path as needed

describe("Toasts Component", () => {
  let container;

  beforeEach(() => {
    // Set up a DOM element as a container for the test
    container = document.createElement("div");
    container.id = "test-container";
    document.body.appendChild(container);
    // Render the Toasts component
    render(<Toasts />, { container });
  });

  afterEach(() => {
    // Clean up after each test
    cleanup();
    document.body.removeChild(container);
  });

  it("should display default toast", () => {
    const toast = document.querySelector("div > div:nth-child(1)");
    expect(toast).toBeInTheDocument();
    expect(toast).toHaveTextContent("This is a dfault toast");
    expect(toast).toHaveStyle("background-color: #343a40");
  });

  it("should display success toast", () => {
    const toast = document.querySelector("div > div:nth-child(2)");
    expect(toast).toBeInTheDocument();
    expect(toast).toHaveTextContent("This is a succes toast");
    expect(toast).toHaveStyle("background-color: #28a745");
  });

  it("should display error toast", () => {
    const toast = document.querySelector("div > div:nth-child(3)");
    expect(toast).toBeInTheDocument();
    expect(toast).toHaveTextContent("This is an error toast");
    expect(toast).toHaveStyle("background-color: #dc3545");
  });

  it("should remove toast after 3 seconds", () => {
    jest.useFakeTimers();
    const toast = document.querySelector("div > div:nth-child(1)");
    expect(toast).toBeInTheDocument();
    jest.advanceTimersByTime(3000);
    expect(toast).not.toBeInTheDocument();
    jest.useRealTimers();
  });

  it("should remove all toasts on dismissAll", () => {
    const { container } = render(<Toasts />);
    const toastElements = container.querySelectorAll("div > div");
    expect(toastElements.length).toBe(3);

    // Simulate calling dismissAll
    const instance =
      container.firstChild.__reactInternalInstance$.return.stateNode;
    instance.dismissAll();

    expect(container.querySelectorAll("div > div").length).toBe(0);
  });
});
