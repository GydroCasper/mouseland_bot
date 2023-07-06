import { Button } from "@mui/material"
import { getTelegramUser } from "../utils/telegram"
import { assignUser } from "../db/firebase"
import { User } from "../types/user"

interface FoodEventProps {
  day: string
  name: string
  users: { [userId: string]: User } | null
}

export const FoodEvent: React.FC<FoodEventProps> = ({ day, name, users }) => {
  const handleAssingMeButtonClick = () => {
    assignUser(day, name, getTelegramUser())
  }

  return (
    <div>
      <div>{name}</div>
      {users
        ? Object.values(users).map((user: User) => (
            <div key={user.id}>
              {`${user.first_name} (${user.username}) ${user.last_name}`}
            </div>
          ))
        : null}
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
