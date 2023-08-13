import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import { DirectivePlugin } from '..'

export default defineConfig({
  resolve: {
    alias: {
      src: '/src',
    },
  },
  plugins: [
    solidPlugin(),
    DirectivePlugin.vite({
      directives: [
        {
          directive: 'model',
          module: './model',
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
