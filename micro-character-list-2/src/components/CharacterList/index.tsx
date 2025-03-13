import styled from "styled-components";

const CharacterList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 32px;
  padding: 24px;
  place-items: center;
`;

export default CharacterList;
