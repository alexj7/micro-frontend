import "./i18n";
import LanguageSelector from "./components/LanguageSelector";
import { useTranslation } from "react-i18next";

import List from "./pages/List";
import { Content, Title } from "./styles/layout";

function App() {
  const { t } = useTranslation();

  return (
    <>
      <LanguageSelector />
      <Title>{t("harry")}</Title>
      <Content>
        <List />;
      </Content>
    </>
  );
}

export default App;
