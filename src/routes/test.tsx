import { createSession } from "@solid-mediakit/auth/client";

const Test = () => {
  const session = createSession();

  return (
    <main>
      <h1>Test page</h1>
      <p>Hello! We are testing things here.</p>
    </main>
  );
};

export default Test;