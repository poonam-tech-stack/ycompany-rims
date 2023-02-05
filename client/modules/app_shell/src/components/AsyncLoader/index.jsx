import React from "react";
import { LinearProgress, Box } from "@mui/material";

const ErrorPage = React.lazy(() => import("shared/ErrorPage"));

const AsyncLoader = ({ children, noLoading }) => {
  return (
    <ErrorBoundary>
      <React.Suspense
        fallback={
          noLoading ? (
            ""
          ) : (
            <Box sx={{ width: "100%" }}>
              <LinearProgress />
            </Box>
          )
        }
      >
        {children}
      </React.Suspense>
    </ErrorBoundary>
  );
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPage />;
    }
    return this.props.children;
  }
}

export default AsyncLoader;
