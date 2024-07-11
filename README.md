# SolidStart + AuthJS

## Get started

Rename `.env.example` to `.env`. Optionally fill with real values to actually log in. Only `AUTH_SECRET` must be set for app to start.

```
npm install
npx prisma generate
npx prisma migrate dev
npm run dev
```

## Setup a Discord app

In order to run this example, you need to setup i.e. a Discord app in here: https://discord.com/developers/applications/, to get a client secret and client id which should be added to the .env file. Also, in the Discord app settings under OAuth2, set the Return URL to: http://localhost:3000/api/auth/callback/discord

## AuthJS

Everything you need to build an [AuthJS](https://authjs.dev/) authenticated Solid project, powered by [`solid-start`](https://start.solidjs.com);


Note that Discord is just one of many auth providers supported by Auth.js.

## This project was created with the [Solid CLI](https://solid-cli.netlify.app)
