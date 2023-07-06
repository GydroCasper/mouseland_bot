import { Button } from "@mui/material"
import { getTelegramUser } from "../utils/telegram"
import { useState } from "react"
import { User } from "../types/user"

interface FoodEventProps {
  name: string
}

export const FoodEvent: React.FC<FoodEventProps> = ({ name }) => {
  const [user, setUser] = useState<User | null>(null)
  const handleAssingMeButtonClick = () => {
    setUser(getTelegramUser())
  }

  return (
    <div>
      <div>{name}</div>
      <div>{JSON.stringify(user)}</div>
      <div>
        <Button
          variant="contained"
          size="small"
          onClick={handleAssingMeButtonClick}
        >
          Assign me
        </Button>
      </div>
    </div>
  )
}
