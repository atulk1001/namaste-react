import {fireEvent,render,screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import {Provider} from "react-redux";
import { BrowserRouter} from "react-router-dom";
import Header from "../Header";
import appStore from "../../utils/appStore";
beforeEach(() => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>  
    )
})
it("Should load header component", () => {
    const cartItems = screen.getByText("Cart (0)");
    expect(cartItems).toBeInTheDocument();
})

it("Should have Cart in header component", () => {
    const cartItems = screen.getByText(/Cart/);
    expect(cartItems).toBeInTheDocument();
})

it("Should click on Cart in header component", () => {
    const cartItems = screen.getByText(/Cart/);
    fireEvent.click(cartItems);
    expect(cartItems).toBeInTheDocument();
})

