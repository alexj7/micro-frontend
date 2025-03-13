import { render, screen } from "@testing-library/react";
import CharacterList from "../index";
import "@testing-library/jest-dom";

const MockCharacter = () => (
  <div data-testid="character-card">Character test</div>
);

describe("CharacterList", () => {
  it("should render correctly with child components", () => {
    render(
      <CharacterList>
        <MockCharacter />
        <MockCharacter />
      </CharacterList>
    );

    const cards = screen.getAllByTestId("character-card");
    const cardsByText = screen.getAllByText("Character test");

    expect(cards).toHaveLength(2);
    expect(cardsByText).toHaveLength(2);
  });
});
