import { Suspense, lazy } from "react";
import { Content, Loader } from "../../styles/layout";
import { useTranslation } from "react-i18next";

const MCList1 = lazy(() => import("micro-character-list-1/List"));
const MCList2 = lazy(() => import("micro-character-list-2/List"));

interface Props {
  selected: string | null;
}

const ContentDisplay = ({ selected }: Props) => {
  const { t } = useTranslation();

  return (
    <Content>
      <Suspense fallback={<p>{t("loading")}</p>}>
        {selected === "MCList1" && <MCList1 />}
        {selected === "MCList2" && <MCList2 />}
      </Suspense>
    </Content>
  );
};

export default ContentDisplay;
