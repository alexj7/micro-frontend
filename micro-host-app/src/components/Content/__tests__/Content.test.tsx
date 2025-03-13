import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18n from "../../../i18n";

const MockComponent = ({ testId }: { testId: string }) => (
  <div data-testid={testId}>Mock {testId}</div>
);

vi.mock("react", async (importOriginal) => {
  const React = await importOriginal<typeof import("react")>();

  const lazy = (factory: any) => {
    const factoryString = factory.toString();

    if (factoryString.includes("micro-character-list-1")) {
      return () => <MockComponent testId="micro-1" />;
    }
    if (factoryString.includes("micro-character-list-2")) {
      return () => <MockComponent testId="micro-2" />;
    }

    return () => <div>Unknown Lazy Component</div>;
  };

  return {
    ...React,
    lazy,
  };
});

import Content from "../index";

describe("Content Component", () => {
  const renderWithProviders = (component: React.ReactNode) => {
    return render(<I18nextProvider i18n={i18n}>{component}</I18nextProvider>);
  };

  it('should render micro-character-list-1 when selected is "MCList1"', async () => {
    renderWithProviders(<Content selected="MCList1" />);
    expect(await screen.findByTestId("micro-1")).toBeInTheDocument();
  });

  it('should render micro-character-list-2 when selected is "MCList2"', async () => {
    renderWithProviders(<Content selected="MCList2" />);
    expect(await screen.findByTestId("micro-2")).toBeInTheDocument();
  });

  it("should render nothing when selected is null", () => {
    renderWithProviders(<Content selected={null} />);
    expect(screen.queryByTestId("micro-1")).not.toBeInTheDocument();
    expect(screen.queryByTestId("micro-2")).not.toBeInTheDocument();
  });
});
