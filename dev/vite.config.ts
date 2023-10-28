import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import DirectivePlugin from '../src'

export default defineConfig({
  plugins: [
    solidPlugin(),
    DirectivePlugin.vite({
      directives: [
        {
          from: './model',
          imports: 'model',
        },
      ],
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
})
