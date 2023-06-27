import { fireEvent, logRoles, render, screen } from "@testing-library/react";
import App from "./App";

test("button has correct initial color, and updates when clicked", () => {
  //const { container } = render(<App />);
  //logRoles(container);
  render(<App />);
  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  // click button
  fireEvent.click(colorButton);

  // expect the bckground color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  // expect the button text to be 'Changed to red'
  expect(colorButton).toHaveTextContent("Change to red");
});

test("initial condition", () => {
  render(<App />);
  // check that the button starts out enabled
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("button has correct situtation when checkbox checked", () => {
  render(<App />);

  const colorButton = screen.getByRole("button");
  const checkbox = screen.getByRole("checkbox");

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});
