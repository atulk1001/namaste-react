import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "../Card";
import MockData from "./mocks/card.mock.json";
it("Should render card component with props", () => {
    render(<Card resData={MockData}/>)
    const name = screen.getByText("Meghana Foods");
    expect(name).toBeInTheDocument();
});