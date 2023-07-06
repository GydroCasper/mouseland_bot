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
  const telegramContext = window.Telegram
  return telegramContext.WebApp.initDataUnsafe.user
}
