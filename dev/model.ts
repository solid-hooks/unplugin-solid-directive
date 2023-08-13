/* eslint-disable @typescript-eslint/no-namespace */
import type { Signal } from 'solid-js'
import { createRenderEffect, onCleanup } from 'solid-js'

declare module 'solid-js' {
  namespace JSX {
    interface Directives {
      model: Signal<string>
    }
  }
}

export function model(el: HTMLInputElement, value: () => Signal<string>) {
  const [val, setVal] = value()
  createRenderEffect(() => (el.value = val()))
  const handleInput = (e: Event) => {
    setVal((e.target as HTMLInputElement).value)
  }
  el.addEventListener('input', handleInput)
  onCleanup(() => el.removeEventListener('input', handleInput))
}
