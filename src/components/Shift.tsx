import { useEffect, useState } from "react"
import { fetchAssignments } from "../db/firebase"
import { ShiftDates } from "./ShiftDates"
import { Assignments } from "../types/assignment"

export const Shift = () => {
  const [assignemnts, setAssignments] = useState<Assignments | null>(null)
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
      <ShiftDates shiftDates={shiftDates} assignments={assignemnts} />
    </div>
  )
}
