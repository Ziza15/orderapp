import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import OrederHistory from "./OrderHistory";
jest.mock("./Loading.module.css", () => ({}));

describe("OrderHistory component", () => {
  it("should render loading spinner when isLoading is true", () => {
    render(<OrederHistory />);
    const loadingSpinner = screen.getByTestId("loading-spinner");
    expect(loadingSpinner).toBeInTheDocument();
  });

  it("should render error message when there is an error", async () => {
    jest
      .spyOn(global, "fetch")
      .mockRejectedValueOnce(new Error("Network error"));
    render(<OrederHistory />);
    await waitFor(() => {
      const errorMessage = screen.getByText("Network error");
      expect(errorMessage).toBeInTheDocument();
    });
  });

  it("should render 'Nemate nijednu porudžbinu!' message when history is empty", async () => {
    jest.spyOn(global, "fetch").mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({}),
    });
    render(<OrederHistory />);
    await waitFor(() => {
      const noOrdersMessage = screen.getByText("Nemate nijednu porudžbinu!");
      expect(noOrdersMessage).toBeInTheDocument();
    });
  });

  it("should render history items when history is not empty", async () => {
    const mockData = {
      order1: {
        id: "order1",
        price: 10,
        date: "2023-06-10",
        address: "123 Main St",
        name: "John Doe",
        postCode: "12345",
        tel: "555-1234",
        items: ["item1", "item2"],
      },
      order2: {
        id: "order2",
        price: 20,
        date: "2023-06-11",
        address: "456 Elm St",
        name: "Jane Smith",
        postCode: "54321",
        tel: "555-5678",
        items: ["item3", "item4"],
      },
    };

    jest.spyOn(global, "fetch").mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockData),
    });

    render(<OrederHistory />);
    await waitFor(() => {
      const orderItem1 = screen.getByTestId("order-item-order1");
      const orderItem2 = screen.getByTestId("order-item-order2");
      expect(orderItem1).toBeInTheDocument();
      expect(orderItem2).toBeInTheDocument();
    });
  });
});
