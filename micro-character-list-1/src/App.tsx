import List from "./pages/List";
import "./i18n";
import LanguageSelector from "./components/LanguageSelector";

function App() {
  return (
    <>
      <LanguageSelector />
      <List />
    </>
  );
}

export default App;
