import { Stack } from "@mui/material"
import { FoodEventAssignments } from "../types/assignment"
import { FoodEvent } from "./FoodEvent"

interface ShiftDateProps {
  date: string
  assignments: FoodEventAssignments | null
}

export const ShiftDate = ({ date, assignments }: ShiftDateProps) => {
  const foodEvents = ["Breakfast", "Lunch", "Snack", "Dinner"]
  return (
    <>
      <div style={{ border: "1px solid black" }} key={date}>
        <div>{date}</div>
        <Stack
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          {foodEvents.map((event) => (
            <div key={event} style={{ flex: 1, boxSizing: "border-box" }}>
              <FoodEvent
                name={event}
                day={date}
                users={assignments ? assignments[event] : null}
              />
            </div>
          ))}
        </Stack>
      </div>
    </>
  )
}
