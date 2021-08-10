import { unmountComponentAtNode } from "react-dom";
import { act, render, screen } from "@testing-library/react";
import App from "./components/App";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders loading message", () => {
  act(() => {
    render(<App />, container);
  });

  const introElement = screen.getByText(/loading/i);
  expect(introElement).toBeInTheDocument();
});
