import { type Component, createSignal } from 'solid-js'

const App: Component = () => {
  const [text, setText] = createSignal('test')
  return (
    <>
      <input type="text" use:model={[text, setText]} />
      {text()}
    </>
  )
}

export default App
