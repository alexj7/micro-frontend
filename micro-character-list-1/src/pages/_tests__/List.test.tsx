import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import List from "../List";

vi.mock("../../hooks/useFetch");
import { useFetch } from "../../hooks/useFetch";
const mockedUseFetch = vi.mocked(useFetch);

import i18n from "../../i18n";
import { I18nextProvider } from "react-i18next";

describe("List Component", () => {
  const renderWithProviders = (component: React.ReactNode) => {
    return render(<I18nextProvider i18n={i18n}>{component}</I18nextProvider>);
  };

  it("should show loading message when fetching data", () => {
    mockedUseFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });

    renderWithProviders(<List />);
    expect(screen.getByText("Cargando personajes...")).toBeInTheDocument();
  });

  it("should render characters when fetch is successful", () => {
    const mockCharacters = [
      {
        id: 1,
        name: "Harry Potter",
        image: "",
        species: "Human",
        gender: "Male",
        house: "Gryffindor",
      },
      {
        id: 2,
        name: "Hermione Granger",
        image: "",
        species: "Human",
        gender: "Female",
        house: "Gryffindor",
      },
    ];

    mockedUseFetch.mockReturnValue({
      data: mockCharacters,
      loading: false,
      error: null,
    });

    renderWithProviders(<List />);
    expect(screen.getByText("Harry Potter")).toBeInTheDocument();
    expect(screen.getByText("Hermione Granger")).toBeInTheDocument();
  });

  it("should show error message when fetch fails", () => {
    mockedUseFetch.mockReturnValue({
      data: null,
      loading: false,
      error: "Error loading data",
    });

    renderWithProviders(<List />);
    expect(screen.getByText("Error loading data")).toBeInTheDocument();
  });
});
