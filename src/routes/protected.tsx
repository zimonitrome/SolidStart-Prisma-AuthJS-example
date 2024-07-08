import { createSession, signOut } from "@solid-mediakit/auth/client";
import { Show, type VoidComponent } from "solid-js";
// import { getUser } from "./index";
import { createAsync } from "@solidjs/router";


const Protected: VoidComponent = () => {
  const session = createSession();

  // const user = createAsync(() => getUser());
  
  return (
    <Show when={session()} fallback={
      <p>Only shown for logged in users</p>
    } keyed>
      {us => (
        <main>
          <h1>Protected</h1>
          {us.user?.image ? <img src={us.user?.image} /> : null}
          <span>Hey there {us.user?.name}! You are signed in!</span>
          <button
            onClick={() =>
              void signOut({
                redirectTo: "/",
                redirect: true
              })
            }
          >
            Sign Out
          </button>
        </main>
      )}
    </Show>
  );
};

export default Protected;
