import React, { Suspense } from "react";
import { Content, Loader } from "../../styles/layout";
import { useTranslation } from "react-i18next";

import type { i18n } from "i18next";

const MCList1 = React.lazy(() => import("micro-character-list-1/List"));
const MCList2 = React.lazy(() => import("micro-character-list-2/List"));

interface Props {
  selected: string | null;
  i18n: i18n;
}

const ContentDisplay = ({ selected }: Props) => {
  const { t } = useTranslation();

  return (
    <Content>
      <Suspense fallback={<Loader>{t("loading")}</Loader>}>
        {selected === "MCList1" && <MCList1 />}
        {selected === "MCList2" && <MCList2 />}
      </Suspense>
    </Content>
  );
};

export default ContentDisplay;
