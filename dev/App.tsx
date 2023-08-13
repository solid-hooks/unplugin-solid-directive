import { type Component, createSignal } from 'solid-js'
import { model } from './model'

const App: Component = () => {
  const [text, setText] = createSignal('')
  return (
    <>
      <input type="text" use:model={[text, setText]} />
      {text()}
    </>
  )
}

export default App
