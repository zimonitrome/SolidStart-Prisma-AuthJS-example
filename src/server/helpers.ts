import { getSession } from "@solid-mediakit/auth";
import { cache } from "@solidjs/router";
import { getWebRequest } from "vinxi/server";
import { authOptions } from "./auth";

export const getUserSession = cache(async () => {
    "use server"
    const request = getWebRequest();
    const session = await getSession(request, authOptions);
    return session;
  }, "user");