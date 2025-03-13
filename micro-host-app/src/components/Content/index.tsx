import { Suspense, lazy } from "react";
import { Content, Loader } from "../../styles/layout";
import { useTranslation } from "react-i18next";

/** 
 * Lazy load a component for testing purposes
 */
const lazyLoad = (importFn: () => Promise<any>, testId?: string) => {
  const isTestEnv = import.meta.env.MODE === 'test';

  if (isTestEnv && testId) {
    // for test environment, return a mock component
    return () => <div data-testid={testId}>Mock {testId}</div>;
  }

  return lazy(importFn);
};

const MCList1 = lazyLoad(() => import("micro-character-list-1/List"), "micro-1");
const MCList2 = lazyLoad(() => import("micro-character-list-2/List"), "micro-2");

interface Props {
  selected: string | null;
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
