import React from "react";
import { I18nextProvider, useTranslation } from "react-i18next";

import CharacterCard from "../components/Card";
import CharacterList from "../components/CharacterList";

import { useFetch } from "../hooks/useFetch";
import { fetchCharacters } from "../services/api";

import type { i18n } from "i18next";

type ListProps = {
  i18n: i18n;
};

const List: React.FC<ListProps> = ({ i18n }) => {
  const { t } = useTranslation();
  const { data: characters, loading, error } = useFetch(fetchCharacters);

  if (loading) return <p>{t("loading")}</p>;
  if (error) return <p>{error}</p>;

  return (
    <I18nextProvider i18n={i18n}>
      <CharacterList>
        {characters?.map((char) => (
          <CharacterCard
            key={char.id}
            name={char.name}
            image={char.image}
            species={char.species}
            gender={char.gender}
          />
        ))}
      </CharacterList>
    </I18nextProvider>
  );
};

export default List;
