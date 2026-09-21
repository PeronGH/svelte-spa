# Project instructions

## Stack

- Use Bun for dependency management, script execution, development serving, and production bundling. Do not introduce Vite, SvelteKit, or another bundler.
- Use Svelte 5 with TypeScript and Tailwind CSS 4. Prefer runes for reactive state.
- Keep the app client-side. `src/main.ts` mounts `src/App.svelte`; global styles live in `src/app.css`.
- `scripts/svelte-plugin.ts` integrates the Svelte compiler with Bun. `bunfig.toml` configures development plugins; `scripts/build.ts` configures production builds.
- Manage dependencies with `bun add`, `bun remove`, and `bun update`; commit `bun.lock` with dependency changes. Do not edit dependency versions or the lockfile by hand.

## Commands

- `bun run dev`: start the development server.
- `bun run format`: format with Prettier, including Svelte and Tailwind class sorting.
- `bun run format:check`: check formatting without changing files.
- `bun run lint`: run ESLint with the recommended TypeScript and Svelte rules.
- `bun run lint:fix`: apply ESLint's automatic fixes.
- `bun run check`: check Svelte and TypeScript types.
- `bun run build`: generate static production assets in `dist/`.
- `bun run preview`: serve the production build.

## Working conventions

- Treat questions and tentative suggestions as requests for analysis; change files only on a clear work order.
- Keep changes focused. Let existing types and downstream errors handle invalid input unless different behavior is required.
- Use the configured formatter instead of manually enforcing style. Keep Markdown prose unwrapped.
- Run formatting, lint, and type checks for code changes; run the build when changing compilation, dependencies, or app behavior.
- Use the cheapest meaningful verification. Add tests only for consequential behavior or regression risks; do not commit generated `dist/` files.
- Request escalation if the sandbox blocks a command; report verification that remains blocked.
- Commit coherent changes using `<type>(<scope>): <description>`. Use a branch for substantial or risky changes. Leave pushing to the user.
