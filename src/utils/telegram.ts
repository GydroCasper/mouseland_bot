import { User } from "../types/user"

declare global {
  interface Window {
    Telegram: {
      WebApp: {
        initDataUnsafe: {
          user: {
            id: number
            first_name: string
            last_name: string
            username: string
          }
        }
      }
    }
  }
}

export const getTelegramUser = (): User => {
  if (process.env.REACT_APP_DEBUG_MODE)
    return {
      id: 101,
      first_name: "Vasya",
      last_name: "Pupkin",
      username: "Unstoppable",
    }
  const telegramContext = window.Telegram
  return telegramContext.WebApp.initDataUnsafe.user
}
