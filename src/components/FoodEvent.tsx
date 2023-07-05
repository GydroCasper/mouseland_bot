import { Button } from "@mui/material"

interface FoodEventProps {
  name: string
}

declare global {
  interface Window {
    Telegram: {
      WebAppUser: any
    }
  }
}

export const FoodEvent: React.FC<FoodEventProps> = ({ name }) => {
  const s = window.Telegram.WebAppUser
  console.log(s)
  const handleAssingMeButtonClick = () => {
    console.log("adsfadsf")
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
