
As of 2024-07-09, SolidStart is at v1.0.0. It has presets for a project with Prisma, and another preset for a project with AuthJS. These are available through running: `npm init solid@latest`. There is a third option of simply `auth`, but it's a very rudimentary custom auth without oauth 2.0.

I am trying to init the Prisma project, and porting in what's needed to make the AuthJS project work.

The main thing needed seems to be an adapter, namely "PrismaAdapter" or "@<something>/prisma-adapter". There are two such popular packages: 

- @next-auth/prisma-adapter: https://www.npmjs.com/package/@next-auth/prisma-adapter

- @auth/prisma-adapter: https://www.npmjs.com/package/@auth/prisma-adapter


The guide for implementing the old "prisma-adapter" is available here: https://next-auth.js.org/v3/adapters/prisma

It suggests using:

```
npm install @prisma/client @next-auth/prisma-adapter
npm install prisma --save-dev
```

I'm gonna try to replace @next-auth with simply @auth:

```
npm install @prisma/client @auth/prisma-adapter
npm install prisma --save-dev
```

This seems to install very well! No package conflicts like in my old experiments :)

---

I try to follow this guide to implement PrismaAdapter:

https://next-auth.js.org/v3/adapters/prisma

But there is a problem. The two types don't match completely. So I have to cast the type:

```ts
import DiscordProvider from "@auth/core/providers/discord";
import GithubProvider from "@auth/core/providers/github";
import { SolidAuthConfig } from "@solid-mediakit/auth/";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { Adapter } from "@auth/core/adapters";

const prisma = new PrismaClient();

export const authOptions: SolidAuthConfig = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID as string,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as string
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string
    })
  ],
  adapter: PrismaAdapter(prisma) as Adapter // Cast because of type mismatch
};
```

But database definitions is incorrect. Trying to use this one instead:

https://authjs.dev/getting-started/adapters/prisma

(under SQLite)

and... it seems to be working!

