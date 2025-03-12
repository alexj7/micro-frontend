import { useTranslation } from "react-i18next";

import { ButtonGroup, Button, Title } from "../../styles/layout";

interface Props {
  selected: string | null;
  onSelect: (list: string) => void;
}

const Header = ({ selected, onSelect }: Props) => {
  const { t } = useTranslation();

  return (
    <>
      <Title>{t("title")}</Title>
      <ButtonGroup>
        <Button
          onClick={() => onSelect("MCList1")}
          active={selected === "MCList1"}
        >
         {t("rick")}
        </Button>
        <Button
          onClick={() => onSelect("MCList2")}
          active={selected === "MCList2"}
        >
          {t("harry")}
        </Button>
      </ButtonGroup>
    </>
  );
};

export default Header;
