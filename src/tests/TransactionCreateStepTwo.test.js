import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TransactionCreateStepTwo from "components/TransactionCreateStepTwo";


// Unit tests
// test("on initial render, the pay button is disabled", async () => {
//     render(<TransactionCreateStepTwo sender={{ id: "3334123" }} receiver={{ id: "222224" }} />);

//     expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();
// });

// test("if an amount and note is entered the pay button change to enabled", async () => {
//     render(<TransactionCreateStepTwo sender={{ id: "3334123" }} receiver={{ id: "222224" }} />);

//     userEvent.type(screen.getByPlaceholderText(/amount/i), "50")
//     userEvent.type(screen.getByPlaceholderText(/add a note/i), "dinner")

//     expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();
// });

// Integration test

test("if an amount and note is entered the pay button change to enabled", async () => {
    render(<TransactionCreateStepTwo sender={{ id: "3334123" }} receiver={{ id: "222224" }} />);

    expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();

    userEvent.type(screen.getByPlaceholderText(/amount/i), "50")
    userEvent.type(screen.getByPlaceholderText(/add a note/i), "dinner")

    expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();
});
