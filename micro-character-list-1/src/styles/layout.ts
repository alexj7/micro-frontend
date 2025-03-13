import styled from "styled-components";

export const colors = {
  cardBackground: "#1e1e1e",
  text: "#e0e0e0",
  shadow: "rgba(0, 0, 0, 0.3)",
};
export const Content = styled.div`
  width: calc(100% - 40px);
  max-width: 1300px;
  min-height: calc(100vh - 200px);
  background: ${colors.cardBackground};
  border-radius: 16px;
  box-shadow: 0 4px 16px ${colors.shadow};
  padding: 24px;
  margin-top: 24px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: ${colors.text};
  margin: 0;
  text-align: center;
  font-weight: 600;

  @media (max-width: 768px) {
   margin-top: 32px;
   margin-bottom: 32px;
  }
`;
