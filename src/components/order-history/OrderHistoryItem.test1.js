import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import OrderHistoryItem from "./OrderHistoryItem";

describe("OrderHistoryItem component", () => {
  let portalContainer;

  beforeEach(() => {
    portalContainer = document.createElement("div");
    document.body.appendChild(portalContainer);
  });

  afterEach(() => {
    document.body.removeChild(portalContainer);
    portalContainer = null;
  });

  it("should render the price and date", () => {
    render(
      <OrderHistoryItem
        price={10}
        date="2023-06-10"
        name="John Doe"
        address="123 Main St"
        postCode="12345"
        tel="555-1234"
        items={[]}
      />
    );

    const priceElement = screen.getByText("Ukupna cijena: 10 RSD / 2023-06-10");
    expect(priceElement).toBeInTheDocument();
  });

  it("should show modal when the 'Detaljnije' button is clicked", () => {
    render(
      <OrderHistoryItem
        price={10}
        date="2023-06-10"
        name="John Doe"
        address="123 Main St"
        postCode="12345"
        tel="555-1234"
        items={[]}
      />,
      { container: portalContainer } // Pravi DOM element kao cilj za portale
    );

    const buttonElement = screen.getByText("Detaljnije");
    fireEvent.click(buttonElement);

    const modalElement = screen.getByRole("dialog");
    expect(modalElement).toBeInTheDocument();
  });

  it("should hide modal when 'onHideModal' handler is called", () => {
    render(
      <OrderHistoryItem
        price={10}
        date="2023-06-10"
        name="John Doe"
        address="123 Main St"
        postCode="12345"
        tel="555-1234"
        items={[]}
      />,
      { container: portalContainer } // Pravi DOM element kao cilj za portale
    );

    const buttonElement = screen.getByText("Detaljnije");
    fireEvent.click(buttonElement);

    const modalElement = screen.getByRole("dialog");
    expect(modalElement).toBeInTheDocument();

    fireEvent.click(screen.getByText("Zatvori"));

    expect(modalElement).not.toBeInTheDocument();
  });
});
