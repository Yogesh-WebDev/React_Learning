import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import "bootstrap/dist/css/bootstrap.css";

Sentry.init({
  dsn: "https://04033ba67b314d90837b8ad0867810ae@o924304.ingest.sentry.io/5872373",
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
