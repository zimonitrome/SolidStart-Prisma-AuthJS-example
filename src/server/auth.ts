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
  adapter: PrismaAdapter(prisma) as Adapter,
  basePath: "/api/auth"
};
