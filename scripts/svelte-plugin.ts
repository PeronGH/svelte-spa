import type { BunPlugin } from 'bun'
import { compile, compileModule } from 'svelte/compiler'

const svelte: BunPlugin = {
  name: 'svelte',
  setup(build) {
    const dev = process.env.NODE_ENV !== 'production'

    build.onLoad({ filter: /\.svelte$/ }, async ({ path }) => {
      const { js } = compile(await Bun.file(path).text(), {
        filename: path,
        generate: 'client',
        css: 'injected',
        dev,
      })
      return { contents: js.code, loader: 'js' }
    })

    build.onLoad({ filter: /\.svelte\.[jt]s$/ }, async ({ path }) => {
      const source = await Bun.file(path).text()
      const code = path.endsWith('.ts')
        ? new Bun.Transpiler({ loader: 'ts' }).transformSync(source)
        : source
      const { js } = compileModule(code, {
        filename: path,
        generate: 'client',
        dev,
      })
      return { contents: js.code, loader: 'js' }
    })
  },
}

export default svelte
