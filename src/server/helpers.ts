import { getSession } from "@solid-mediakit/auth";
import { cache } from "@solidjs/router";
import { getWebRequest } from "vinxi/server";
import { authOptions } from "./auth";

export const getUserSession = cache(async () => {
    "use server"
    console.log("Hello world");
    console.log(1);
    const request = getWebRequest();
    console.log(2);
    console.log(request);
    console.log(3);
    const session = await getSession(request, authOptions);
    console.log(session);
    console.log(4);
    return session;
  }, "user");