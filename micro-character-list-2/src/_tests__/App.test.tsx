import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../App";

import i18n from "../i18n";
import { I18nextProvider } from "react-i18next";

vi.mock("../hooks/useFetch");
import { useFetch } from "../hooks/useFetch";
const mockedUseFetch = vi.mocked(useFetch);

describe("App Component", () => {
  const renderWithProviders = (component: React.ReactNode) => {
    return render(<I18nextProvider i18n={i18n}>{component}</I18nextProvider>);
  };

  it("should render without crashing", () => {
    mockedUseFetch.mockReturnValue({
      data: [],
      loading: false,
      error: null,
    });

    renderWithProviders(<App />);

    expect(screen.getByText("🇬🇧")).toBeInTheDocument();
    expect(screen.getByText("🇪🇸")).toBeInTheDocument();
  });

  it("should render character list when data is fetched", () => {
    mockedUseFetch.mockReturnValue({
      data: [
        {
          id: 1,
          name: "Harry Potter",
          image: "",
          species: "Human",
          gender: "Male",
          house: "Gryffindor",
        },
      ],
      loading: false,
      error: null,
    });

    renderWithProviders(<App />);

    expect(screen.getByText("Harry Potter")).toBeInTheDocument();
  });

  it("should render loading message when fetching data", () => {
    mockedUseFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });

    renderWithProviders(<App />);

    expect(screen.getByText("Cargando personajes...")).toBeInTheDocument();
  });

  it("should render error message if fetch fails", () => {
    mockedUseFetch.mockReturnValue({
      data: null,
      loading: false,
      error: "Error loading data",
    });

    renderWithProviders(<App />);

    expect(screen.getByText("Error loading data")).toBeInTheDocument();
  });
});
