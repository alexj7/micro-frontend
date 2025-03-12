import { useTranslation } from "react-i18next";
import styled from "styled-components";

interface CharacterCardProps {
  name: string;
  image: string;
  species?: string;
  gender?: string;
}

const colors = {
  cardBackground: "#121212",
  text: "#e0e0e0",
  mutedText: "#b0b0b0",
  shadow: "rgba(0, 0, 0, 0.3)",
};

const Card = styled.div`
  width: 220px;
  background-color: ${colors.cardBackground};
  border-radius: 12px;
  box-shadow: 0 4px 12px ${colors.shadow};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 16px ${colors.shadow};
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  background: #2a2a2a;
`;

const CardContent = styled.div`
  padding: 16px;
  width: 100%;
  text-align: center;
`;

const CardTitle = styled.h3`
  margin: 0 0 8px;
  font-size: 1.1rem;
  font-weight: bold;
  color: ${colors.text};
`;

const CardDetail = styled.p`
  margin: 4px 0;
  font-size: 0.9rem;
  color: ${colors.mutedText};
  text-transform: capitalize;
`;
const CharacterCard: React.FC<CharacterCardProps> = ({
  name,
  image,
  species,
  gender,
}) => {
  const { t } = useTranslation();

  return (
    <Card>
      <CardImage src={image} alt={name} />
      <CardContent>
        <CardTitle>{name}</CardTitle>
        {species && (
          <CardDetail>
            {t("species")}: {species}
          </CardDetail>
        )}
        {gender && (
          <CardDetail>
            {t("gender")}: {gender}
          </CardDetail>
        )}
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
