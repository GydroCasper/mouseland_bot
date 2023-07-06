import { Shift } from "./components/Shift"

declare global {
  interface Window {
    Telegram: {
      WebAppUser: any
    }
  }
}

function App() {
  const s = window.Telegram

  return (
    <>
      <div>{JSON.stringify(s)}</div>
      <Shift />
    </>
  )
}

export default App
