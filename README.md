# svelte-spa

A Svelte + TypeScript SPA with Tailwind CSS. Bun manages dependencies, serves the app, and bundles production assets.

```sh
bun install
bun run dev
```

Edit `src/App.svelte` to build the app. Use Tailwind utility classes in components; global styles live in `src/app.css`.

```sh
bun run check
bun run build
bun run preview
```

The production build is written to `dist/` for static hosting. Configure your host to serve `index.html` for client-side routes if you add a router.
