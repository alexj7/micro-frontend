import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";

import i18n from "../../../i18n";
import ErrorBoundary from "../index";

const ProblemChild = () => {
  throw new Error("Error test");
};

describe("ErrorBoundary Component", () => {
  const renderWithProviders = (ui: React.ReactNode) =>
    render(<I18nextProvider i18n={i18n}>{ui}</I18nextProvider>);

  it("should render children when no error", () => {
    renderWithProviders(
      <ErrorBoundary>
        <h1>Hola Mundo</h1>
      </ErrorBoundary>
    );

    expect(screen.getByText("Hola Mundo")).toBeInTheDocument();
  });

  it("should display error message when an error is thrown", () => {
    const consoleErrorMock = vi
      .spyOn(console, "error")
      .mockImplementation(() => {});

    renderWithProviders(
      <ErrorBoundary>
        <ProblemChild />
      </ErrorBoundary>
    );

    expect(screen.getByText(i18n.t("error.title"))).toBeInTheDocument();
    expect(
      screen.getByText(i18n.t("error.message"))
    ).toBeInTheDocument();

    consoleErrorMock.mockRestore();
  });
});
