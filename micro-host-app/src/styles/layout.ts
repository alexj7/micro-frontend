import styled from "styled-components";

export const colors = {
  background: "#121212",
  cardBackground: "#1e1e1e",
  text: "#e0e0e0",
  mutedText: "#b0b0b0",
  activeBorder: "#e0e0e0",
  border: "#444",
  buttonHover: "#555",
  shadow: "rgba(0, 0, 0, 0.3)",
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  gap: 32px;
  background: ${colors.background};
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

export const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 32px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Button = styled.button<{ active?: boolean }>`
  padding: 14px 32px;
  font-size: 1rem;
  border-radius: 50px;
  border: 2px solid ${({ active }) => (active ? colors.activeBorder : colors.border)};
  background: transparent;
  color: ${({ active }) => (active ? colors.text : colors.mutedText)};
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  letter-spacing: 0.5px;

  &:hover {
    border-color: ${colors.activeBorder};
    color: ${colors.text};
    background: ${colors.buttonHover};
  }

  &:focus {
    outline: none;
  }
`;

export const Content = styled.div`
  width: calc(100% - 40px);
  max-width: 1300px;
  min-height: calc(100vh - 200px);
  background: ${colors.cardBackground};
  border-radius: 16px;
  box-shadow: 0 4px 16px ${colors.shadow};
  padding: 24px;
`;

export const Loader = styled.div`
  font-size: 1.2rem;
  color: ${colors.text};
  text-align: center;
  padding: 50px 0;
`;
