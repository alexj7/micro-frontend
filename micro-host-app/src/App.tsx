import "./i18n";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Container } from "./styles/layout";

import Header from "./components/Header";
import ContentDisplay from "./components/Content";
import LanguageSelector from "./components/languageSelector";

const App = () => {
  const [selectedList, setSelectedList] = useState<string | null>("MCList1");
  const { i18n } = useTranslation();

  return (
    <Container>
      <LanguageSelector  />
      <Header selected={selectedList} onSelect={setSelectedList} />
      <ContentDisplay selected={selectedList} i18n={i18n} />
    </Container>
  );
};

export default App;
