# DEPRECATE: prefer to use [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)

<p>
  <img width="100%" src="https://assets.solidjs.com/banner?type=unplugin-solid-directive&background=tiles&project=%20" alt="unplugin-solid-directive">
</p>

# unplugin-solid-directive

[![pnpm](https://img.shields.io/badge/maintained%20with-pnpm-cc00ff.svg?style=for-the-badge&logo=pnpm)](https://pnpm.io/)

Auto inject solid directives

## Quick start

Install it:

```bash
npm i unplugin-solid-directive
# or
yarn add unplugin-solid-directive
# or
pnpm add unplugin-solid-directive
```


<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import Directive from 'unplugin-solid-directive/vite'

export default defineConfig({
  plugins: [
    Directive({ /* options */ }),
  ],
})
```


<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import Directive from 'unplugin-solid-directive/rollup'

export default {
  plugins: [
    Directive({ /* options */ }),
    // other plugins
  ],
}
```

<br></details>


<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-solid-directive/webpack')({ /* options */ }),
  ],
}
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from 'esbuild'

build({
  /* ... */
  plugins: [require('unplugin-solid-directive/esbuild')()],
})
```

<br></details>


<details>
<summary>Rspack</summary><br>

```ts
// rspack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-solid-directive/rspack')({ /* options */ }),
  ],
}
```
<br></details>

## Options

the option descriptions are well-documented in jsdoc

or see in [`type.ts`](./src/type.ts)

## Example

Example(vite): [`dev/`](./dev/)