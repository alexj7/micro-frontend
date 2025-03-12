import React from "react";
import { useTranslation } from "react-i18next";

import CharacterCard from "../components/Card";
import CharacterList from "../components/CharacterList";

import { useFetch } from "../hooks/useFetch";
import { fetchCharacters } from "../services/api";

const List: React.FC = () => {
  const { t } = useTranslation();
  const { data: characters, loading, error } = useFetch(fetchCharacters);

  if (loading) return <p>{t("loading")}</p>;
  if (error) return <p>{error}</p>;

  return (
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
  );
};

export default List;
