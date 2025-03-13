import { render, screen } from "@testing-library/react";
import CharacterCard from "../index";

describe("CharacterCard", () => {
  it("must correctly render the character's data", () => {
    render(
      <CharacterCard
        name="Harry Potter"
        image="https://example.com/rick.png"
        species="Human"
        gender="Male"
        house="Griffindor"
      />
    );

    expect(screen.getByText("Harry Potter")).toBeInTheDocument();

    expect(screen.getByText(/Human/i)).toBeInTheDocument();
    expect(screen.getByText(/Male/i)).toBeInTheDocument();
    expect(screen.getByText(/Griffindor/i)).toBeInTheDocument();

    expect(screen.getByAltText("Harry Potter")).toHaveAttribute(
      "src",
      "https://example.com/rick.png"
    );
  });
});
