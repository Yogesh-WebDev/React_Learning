import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

function init() {
    Sentry.init({
    dsn: "https://04033ba67b314d90837b8ad0867810ae@o924304.ingest.sentry.io/5872373",
    integrations: [new Integrations.BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
        // of transactions for performance monitoring.
        // We recommend adjusting this value in production
         tracesSampleRate: 1.0,
    });
}
function log(error) {
    Sentry.captureException( error);
}

export default {
    init,log
}