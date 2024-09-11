import { type Component, createSignal } from 'solid-js'

const App: Component = () => {
  const [text, setText] = createSignal('test')
  return (
    <>
      {/* eslint-disable-next-line solid/jsx-no-undef */}
      <input type="text" use:model={[text, setText]} />
      {text()}
    </>
  )
}

export default App
