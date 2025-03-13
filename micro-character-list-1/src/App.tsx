import styled from "styled-components";
import "./i18n";
import List from "./pages/List";
import LanguageSelector from "./components/LanguageSelector";
import { Content, Title } from "./styles/layout";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <>
      <LanguageSelector />
      <Title>{t("rick")}</Title>
      <Content>
        <List />
      </Content>
    </>
  );
}

export default App;
