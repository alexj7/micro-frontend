import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { colors } from "../../styles/layout";

const Wrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  gap: 12px;
`;

const Button = styled.button<{ active?: boolean }>`
  padding: 8px 12px;
  font-size: 0.9rem;
  border-radius: 8px;
  border: 1px solid ${({ active }) => (active ? colors.activeBorder : colors.border)};
  background: transparent;
  color: ${({ active }) => (active ? colors.text : colors.mutedText)};
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;

  &:hover {
    border-color: ${colors.activeBorder};
    color: ${colors.text};
    background: ${colors.buttonHover};
  }
  &:focus {
    outline: none;
  }
`;

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language;

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Wrapper>
      <Button
        onClick={() => changeLanguage("es")}
        active={currentLanguage === "es"}
      >
        🇪🇸
      </Button>
      <Button
        onClick={() => changeLanguage("en")}
        active={currentLanguage === "en"}
      >
        🇬🇧
      </Button>
    </Wrapper>
  );
};

export default LanguageSelector;
