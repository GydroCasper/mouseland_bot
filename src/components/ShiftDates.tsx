import { Assignments } from "../types/assignment"
import { ShiftDate } from "./ShiftDate"

interface ShiftDatesProps {
  shiftDates: Date[]
  assignments: Assignments | null
}

export const ShiftDates = ({ shiftDates, assignments }: ShiftDatesProps) => {
  return (
    <>
      {shiftDates.map((date) => {
        const fromattedDate = formatDate(date)
        return (
          <ShiftDate
            date={fromattedDate}
            assignments={assignments ? assignments[fromattedDate] : null}
            key={fromattedDate}
          />
        )
      })}
    </>
  )
}

const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    month: "short",
    day: "numeric",
  }

  return date.toLocaleDateString("en-US", options)
}
