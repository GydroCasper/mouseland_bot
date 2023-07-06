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
      <div>{s.toString()}</div>
      <Shift />
    </>
  )
}

export default App
