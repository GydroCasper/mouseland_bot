import { useEffect, useState } from "react"
import { fetchAssignments } from "../db/firebase"
import { FoodEvent } from "./FoodEvent"
import { User } from "../types/user"

export const Shift = () => {
  const [assignemnts, setAssignments] = useState<User[]>([])
  const shiftPeriod = process.env.REACT_APP_SHIFT_PERIOD
  const dates = shiftPeriod?.split("-")

  if (!dates?.length) {
    throw new Error("Shift dates are not defined")
  }

  const startDateArray = dates[0].split(".")
  const endDateArray = dates[1].split(".")

  const startDate = new Date(
    +startDateArray[2],
    +startDateArray[1] - 1,
    +startDateArray[0]
  )
  const endDate = new Date(
    +endDateArray[2],
    +endDateArray[1] - 1,
    +endDateArray[0]
  )

  const dayIndex = startDate
  const shiftDates = []
  while (dayIndex <= endDate) {
    shiftDates.push(new Date(dayIndex))
    dayIndex.setDate(dayIndex.getDate() + 1)
  }

  const foodEvents = ["Breakfast", "Lunch", "Snack", "Dinner"]

  useEffect(() => {
    fetchAssignments(setAssignments)
  }, [])

  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        margin: "0.5rem",
        gap: "2rem",
        textAlign: "center",
      }}
    >
      {shiftDates.map((date) => (
        <div style={{ border: "1px solid black" }} key={date.toDateString()}>
          <div>{date.toDateString()}</div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            {foodEvents.map((event) => (
              <div key={event}>
                <FoodEvent name={event} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
