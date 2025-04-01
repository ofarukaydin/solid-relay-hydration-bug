import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import { RelayEnvironmentProvider } from "solid-relay";
import { createEnvironment } from "~/relay-environment";
import { loadRootPreloadQuery } from "~/root.preload";

export default function App() {
  return (
    <RelayEnvironmentProvider environment={createEnvironment()}>
      <Router
        rootPreload={() => {
          void loadRootPreloadQuery();
        }}
        root={(props) => (
          <MetaProvider>
            <Suspense>{props.children}</Suspense>{" "}
          </MetaProvider>
        )}
      >
        <FileRoutes />
      </Router>
    </RelayEnvironmentProvider>
  );
}
