import { screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../src/App.jsx";
import { renderWithProviders } from "../utils/utils-for-tests.jsx";

describe("React-Redux : App", () => {
  it("ยังไม่ใส่ function onClick ที่ปุ่ม 'Submit'", async () => {
    renderWithProviders(<App />);

    const textToType = "Hello, World!";
    await userEvent.type(screen.getByRole("textbox"), textToType);

    fireEvent.click(screen.getByRole("button", { name: "Submit" }));

    const inputContent = screen.getByText("Hello, World!");
    expect(inputContent).toBeInTheDocument;
  });

  it("ยังไม่ใส่ function onClick ที่ปุ่ม 'x'", async () => {
    renderWithProviders(<App />);

    fireEvent.click(screen.getByRole("button", { name: "Submit" }));
    const deleteButton = screen.getByText("x");
    expect(deleteButton).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "x" }));
    expect(deleteButton).not.toBeInTheDocument();
  });
});
