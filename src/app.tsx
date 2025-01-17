// @refresh reload
import { SessionProvider } from '@solid-mediakit/auth/client';
import { getSession } from '@solid-mediakit/auth';
import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { onMount, Suspense } from "solid-js";
import "./app.css";
import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";

polyfillCountryFlagEmojis();

export default function App() {

  return (
    <Router
      root={props => (
        <MetaProvider>
          <Title>SolidStart - Basic</Title>
          <a href="/">Index</a>
          <a href="/protected">Protected</a>
          <a href="/test">Test</a>
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

