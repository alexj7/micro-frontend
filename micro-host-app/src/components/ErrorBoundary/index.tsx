import React, { Component, ReactNode } from "react";
import { withTranslation, WithTranslation } from "react-i18next";

interface Props extends WithTranslation {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error capturado por ErrorBoundary:", error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children, t } = this.props;

    if (hasError) {
      return (
        <div style={{ padding: "20px", textAlign: "center", color: "white" }}>
          <h2>{t("error.title")}</h2>
          <p>{t("error.message")}</p>
        </div>
      );
    }

    return children;
  }
}

export default withTranslation()(ErrorBoundary);
