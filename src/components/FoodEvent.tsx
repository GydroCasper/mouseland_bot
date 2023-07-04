import { Button } from "@mui/material"

interface FoodEventProps {
  name: string
}

export const FoodEvent: React.FC<FoodEventProps> = ({ name }) => {
  return (
    <div>
      <div>{name}</div>
      <div><Button variant="contained" size="small">Assign me</Button></div>
    </div>
  )
}
