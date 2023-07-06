import { Button } from "@mui/material"
import { getTelegramUser } from "../utils/telegram"
import { assignUser } from "../db/firebase"

interface FoodEventProps {
  name: string
}

export const FoodEvent: React.FC<FoodEventProps> = ({ name }) => {
  const handleAssingMeButtonClick = () => {
    assignUser(getTelegramUser())
  }

  return (
    <div>
      <div>{name}</div>
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
