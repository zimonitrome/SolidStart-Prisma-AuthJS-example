import { createSession, signIn } from "@solid-mediakit/auth/client";
import { createAsync } from "@solidjs/router";
import { Show } from "solid-js";
import { getUserSession } from "~/server/helpers";

const Home = () => {

  const mySession = createAsync(() => getUserSession());

  const session = createSession();

  return (
    <main>
      <h1>Home</h1>
      <p>Session: {mySession()?.user?.name ?? "none"}</p>
      <Show
        when={session()}
        fallback={
          <>
            <span>You are not signed in.</span>
            <button onClick={() => signIn("discord")}>Sign In Discord</button>
            <button onClick={() => signIn("github")}>Sign In Github</button>
          </>
        }
      >
        <p>logged in</p>
      </Show>
    </main>
  );
};

export default Home;