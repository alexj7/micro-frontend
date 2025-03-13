import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";

import Header from "../index";
import i18n from "../../../i18n";

describe("Header Component", () => {
  const renderWithProviders = (component: React.ReactNode) => {
    return render(<I18nextProvider i18n={i18n}>{component}</I18nextProvider>);
  };

  it("should render the title and buttons with translations", () => {
    renderWithProviders(<Header selected={null} onSelect={() => {}} />);

    expect(screen.getByText(i18n.t("title"))).toBeInTheDocument();
    expect(screen.getByText(i18n.t("rick"))).toBeInTheDocument();
    expect(screen.getByText(i18n.t("harry"))).toBeInTheDocument();
  });

  it('should call onSelect with "MCList1" when Rick button is clicked', () => {
    const onSelectMock = vi.fn();
    renderWithProviders(<Header selected={null} onSelect={onSelectMock} />);

    fireEvent.click(screen.getByText(i18n.t("rick")));
    expect(onSelectMock).toHaveBeenCalledTimes(1);
    expect(onSelectMock).toHaveBeenCalledWith("MCList1");
  });

  it('should call onSelect with "MCList2" when Harry button is clicked', () => {
    const onSelectMock = vi.fn();
    renderWithProviders(<Header selected={null} onSelect={onSelectMock} />);

    fireEvent.click(screen.getByText(i18n.t("harry")));
    expect(onSelectMock).toHaveBeenCalledTimes(1);
    expect(onSelectMock).toHaveBeenCalledWith("MCList2");
  });
});
