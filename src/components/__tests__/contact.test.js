import {render,screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("should load contact component", () => {
    render(<Contact/>)
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})

test("should load button in contact component", () => {
    render(<Contact/>)
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
})

test("should have input fields in contact component", () => {
    render(<Contact/>);
    const allInputs = screen.getAllByRole("textbox");
    expect(allInputs.length).toBe(6);

test("should load input in contact component", () => {
    render(<Contact/>);
    const input = screen.getByTestId("email");
    expect(input).toBeInTheDocument()
})