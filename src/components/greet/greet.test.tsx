import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

// test("Greet renders correctly", () => {
//   render(<Greet />);
//   const textElement = screen.getByText(/hello/i);
//   expect(textElement).toBeInTheDocument();
// });
describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });
});

describe("Nested", () => {
  test("renders with a name", () => {
    //test.skip() or test.only()
    render(<Greet name="Adetomi" />);
    const textElement = screen.getByText(`Hello Adetomi`);
    expect(textElement).toBeInTheDocument();
  });
});
