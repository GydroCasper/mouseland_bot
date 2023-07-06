import { Button } from "@mui/material"

interface FoodEventProps {
  name: string
}

export const FoodEvent: React.FC<FoodEventProps> = ({ name }) => {
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
