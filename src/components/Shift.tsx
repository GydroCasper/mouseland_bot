import { FoodEvent } from "./FoodEvent"

export const Shift = () => {
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

  return (
    <div style={{backgroundColor: 'white'}}>
      {shiftDates.map((date) => (
        <div>
          <div>{date.toDateString()}</div>
          {foodEvents.map((event) => (
            <FoodEvent name={event} />
          ))}
        </div>
      ))}
    </div>
  )
}
