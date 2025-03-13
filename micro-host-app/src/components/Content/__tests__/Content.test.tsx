import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";

import Content from "../index";
import i18n from "../../../i18n";


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
