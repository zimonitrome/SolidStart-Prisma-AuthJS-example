// @refresh reload
import { SessionProvider } from '@solid-mediakit/auth/client';
import { getSession } from '@solid-mediakit/auth';
import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { onMount, Suspense } from "solid-js";
import "./app.css";


export default function App() {

  return (
    <Router
      root={props => (
        <MetaProvider>
          <Title>SolidStart - Basic</Title>
          <a href="/">Index</a>
          <a href="/protected">Protected</a>
          <Suspense>
            <SessionProvider>{props.children} </SessionProvider>
          </Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}

