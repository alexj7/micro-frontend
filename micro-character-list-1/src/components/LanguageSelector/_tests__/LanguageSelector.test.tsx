import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import LanguageSelector from "../index";
import i18n from "../../../i18n";

describe("LanguageSelector", () => {
  beforeEach(() => {
    i18n.changeLanguage("en");
  });

  it("should render both language buttons", () => {
    render(<LanguageSelector />);
    
    expect(screen.getByText("🇬🇧")).toBeInTheDocument();
    expect(screen.getByText("🇪🇸")).toBeInTheDocument();
  });

  it("should have English as default language", () => {
    render(<LanguageSelector />);

    expect(i18n.language).toBe("en");
  });

  it("should switch to Spanish when Spanish button is clicked", () => {
    render(<LanguageSelector />);
    fireEvent.click(screen.getByText("🇪🇸"));

    expect(i18n.language).toBe("es");
  });

  it("should switch back to English when English button is clicked", () => {
    render(<LanguageSelector />);
    fireEvent.click(screen.getByText("🇬🇧"));

    expect(i18n.language).toBe("en");
  });
});
