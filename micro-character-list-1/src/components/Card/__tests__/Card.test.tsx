import { render, screen } from "@testing-library/react";
import CharacterCard from "../index";

describe("CharacterCard", () => {
  it("must correctly render the character's data", () => {
    render(
      <CharacterCard
        name="Rick Sanchez"
        image="https://example.com/rick.png"
        species="Human"
        gender="Male"
      />
    );

    expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();

    expect(screen.getByText(/Human/i)).toBeInTheDocument();
    expect(screen.getByText(/Male/i)).toBeInTheDocument();

    expect(screen.getByAltText("Rick Sanchez")).toHaveAttribute(
      "src",
      "https://example.com/rick.png"
    );
  });
});
