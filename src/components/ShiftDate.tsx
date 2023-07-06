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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          {foodEvents.map((event) => (
            <div key={event}>
              <FoodEvent
                name={event}
                day={date}
                users={assignments ? assignments[event] : null}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
