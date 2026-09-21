import { rm } from 'node:fs/promises'
import tailwind from 'bun-plugin-tailwind'
import svelte from './svelte-plugin'

await rm('dist', { recursive: true, force: true })

await Bun.build({
  entrypoints: ['./index.html'],
  outdir: './dist',
  target: 'browser',
  minify: true,
  plugins: [svelte, tailwind],
})
