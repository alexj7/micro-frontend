import "./i18n";
import { useState } from "react";

import { Container } from "./styles/layout";

import Header from "./components/Header";
import Content from "./components/Content";
import LanguageSelector from "./components/languageSelector";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  console.log("ENV MODE:", import.meta.env.MODE);
  const [selectedList, setSelectedList] = useState<string | null>("MCList1");

  return (
    <Container>
      <LanguageSelector />
      <Header selected={selectedList} onSelect={setSelectedList} />
      <ErrorBoundary>
        <Content selected={selectedList} />
      </ErrorBoundary>
    </Container>
  );
};

export default App;
