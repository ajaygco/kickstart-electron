// Modules
import React from "react";
import { HashRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

// Styles
import "styles/app.styles.css";

// Components
import { AppRouter } from "components/app-router";
import { AppErrorBoundary } from "components/app-error-boundary";

// Create Root
const app = createRoot(document.getElementById("root"));

// Render
app.render(
  <AppErrorBoundary>
    <HashRouter>
      <AppRouter />
    </HashRouter>
  </AppErrorBoundary>
);
