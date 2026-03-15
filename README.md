# Svelte App

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
yarn create svelte@latest

# create a new project in my-app
yarn create svelte@latest my-app
```

## Setup

1. Install Node >= 22 and run `corepack enable `
2. Create a `.env` file and set `YARN_GLOBAL_FOLDER` e.g. `YARN_GLOBAL_FOLDER=D:/.yarn/.berry`
3. `yarn install`

### VSCode

1. Copy `.vscode/settings.default.json` > .vscode/settings.json
2. Replace `${workspaceFolder}` with absolute path
3. Restart VSCode
4. Install all recomended extensions and use workspace TypeScript version

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
yarn dev

# or start the server and open the app in a new browser tab
yarn dev -- --open
```

## Building

To create a production version of your app:

```bash
yarn build
```

You can preview the production build with `yarn preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
