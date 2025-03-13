import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import { vi } from "vitest";
import * as React from "react";

import App from "../App";
import i18n from "../i18n";

const MockComponent = ({ testId }: { testId: string }) => (
  <div data-testid={testId}>Mock {testId}</div>
);

vi.mock("react", async (importOriginal) => {
  const React = await importOriginal<typeof import("react")>();

  return {
    ...React,
    lazy: (factory: any) => {
      const factoryString = factory.toString();
      if (factoryString.includes("micro-character-list-1")) {
        return () => <MockComponent testId="micro-1" />;
      }
      if (factoryString.includes("micro-character-list-2")) {
        return () => <MockComponent testId="micro-2" />;
      }
    },
  };
});

describe("App Component (Host)", () => {
  const renderWithProviders = (component: React.ReactNode) => {
    return render(<I18nextProvider i18n={i18n}>{component}</I18nextProvider>);
  };

  it("should render LanguageSelector and Header", () => {
    renderWithProviders(<App />);

    expect(screen.getByText("🇬🇧")).toBeInTheDocument();
    expect(screen.getByText("🇪🇸")).toBeInTheDocument();
    expect(screen.getByText(i18n.t("rick"))).toBeInTheDocument();
    expect(screen.getByText(i18n.t("harry"))).toBeInTheDocument();
  });

  it('should render Rick and Morty list by default (micro-1)', async () => {
    renderWithProviders(<App />);

    expect(await screen.findByTestId("micro-1")).toBeInTheDocument();
    expect(screen.queryByTestId("micro-2")).not.toBeInTheDocument();
  });

  it('should switch to Harry Potter list (micro-2) when clicking "Harry Potter" button', async () => {
    renderWithProviders(<App />);

    fireEvent.click(screen.getByText(i18n.t("harry")));

    expect(await screen.findByTestId("micro-2")).toBeInTheDocument();
    expect(screen.queryByTestId("micro-1")).not.toBeInTheDocument();
  });

  it('should switch back to Rick and Morty (micro-1) when clicking "Rick and Morty" button', async () => {
    renderWithProviders(<App />);

    fireEvent.click(screen.getByText(i18n.t("harry")));
    expect(await screen.findByTestId("micro-2")).toBeInTheDocument();

    fireEvent.click(screen.getByText(i18n.t("rick")));
    expect(await screen.findByTestId("micro-1")).toBeInTheDocument();
  });
});